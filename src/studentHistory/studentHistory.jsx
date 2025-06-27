import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import styles from "./studentHistory.module.css"

function StudentHistory(){

    const [historyType, setHistoryType] = useState("");
    const [historyStudentArray, setHistoryStudentArray] = useState([]);
    const [dates, setDates] = useState([]);
    const [vacationsList, setVacationList]=useState([]);
    const [noVacationList,setNoVacationList]=useState(false);
    useEffect(()=>{
        fetchDates();
        fetchLongVacationStudent();
    })

    const fetchDates = ()=>{
        const database = getDatabase();
        const dateRef = ref(database, "History");
        get(dateRef)
        .then((snapshot)=>{
            if(snapshot.exists()){
                const data= snapshot.val();
                const datesArray = Object.keys(data);
                setDates(datesArray);
            }
        })

    }

    const fetchLongVacationStudent = ()=>{
        const database= getDatabase();
        const longVacationRef = ref(database, "Vacations");
        get(longVacationRef)
        .then((snapshot)=>{
            if(snapshot.exists()){
                const data=snapshot.val();
                const studentArray = Object.keys(data).map((studentData)=>({
                    name: data[studentData].Name,
                    phoneNo: data[studentData].PhoneNumber,
                    exitDate: data[studentData].ExitTime,
                    enrollmentNumber: data[studentData].EnrollmentNumber,
                    reason: data[studentData].Reason,
                    returnDate: data[studentData].ReturnDate,
                }))
                setVacationList(studentArray);
                setNoVacationList(false);
                
            }
            else{
                console.log("No data available");
                setNoVacationList(true)
            }

        })
    }
    
    const handleFetchOnDateHistory = (event) => {
            const selectedDate = event.target.value;
            const database = getDatabase();
            const historyRef = ref(database, `History/${selectedDate}`);
    
            console.log("Fetching data for date:", selectedDate);
    
            get(historyRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.val();
                        const studentArray = Object.keys(data).map((student) => ({
                            exitTime: data[student].ExitTime,
                            entryTime: data[student].EntryTime,
                            name: data[student].Name,
                            phoneNo: data[student].PhoneNumber,
                        }));
    
                        setHistoryStudentArray(studentArray);
                        
                    } else {
                        console.log("No data found for this date.");
                        setHistoryStudentArray([]); 
                    }
                })
                .catch((error) => {
                    console.error("Error fetching history data:", error);
                });
        };
    

    return(
        <div>
            <div>
                <div className={styles.historyNav}>
                    <label htmlFor="studentHistory">
                        <input 
                            type="radio" 
                            name="historyType" 
                            value="outingHistory"
                            onChange={() => setHistoryType("outingHistory")} 
                            checked={historyType === "outingHistory"}
                        /> Outing History
                        <br />
                        <input 
                            type="radio" 
                            name="historyType" 
                            value="longOutingHistory"
                            onChange={() => setHistoryType("longOutingHistory")} 
                            checked={historyType === "longOutingHistory"}
                        /> Long Outing History
                    </label>

                    {/* Show date dropdown only if "Outing History" is selected */}
                    {historyType === "outingHistory" && (
                        <select onChange={(event) => handleFetchOnDateHistory(event)} name="Dates" className={styles.datesDropDown}>
                            <option>Select Date</option>
                            {dates.map((date, index) => (
                                <option key={index} value={date}>{date}</option>
                            ))}
                        </select>
                    )}
                </div>

                <ol>
                    {historyType === "outingHistory" && historyStudentArray.map((student, index) => (
                        <li key={index} className={styles.studentItem} style={{backgroundColor: "aliceblue"}}>
                            <div className={styles.aboveDets}>
                                <h3>{student.name}</h3>
                                <h4>Out: {student.exitTime}</h4>
                            </div>
                            <div className={styles.belowDets}>
                                <h4><strong>Phone No.: </strong>{student.phoneNo}</h4>
                                <h4>In: {student.entryTime}</h4>
                            </div>
                        </li>
                    ))}
                    {historyType === "longOutingHistory" && vacationsList.map((student, index) => (
                        <li key={index} className={styles.studentItem} style={{backgroundColor: "aliceblue"}}>
                            <div className={styles.aboveDets}>
                                <h3>{student.name}</h3>
                                <h4>{student.exitDate}</h4>
                            </div>
                            <div className={styles.belowDets}>
                                <h4><strong>Phone No.: </strong>{student.phoneNo}</h4>
                                <h4>{student.returnDate}</h4>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default StudentHistory;