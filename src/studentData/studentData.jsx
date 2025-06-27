import { useState, useEffect } from "react";
import { getDatabase, ref, set, get, remove, onValue } from "firebase/database";
import styles from "./studentData.module.css"

function StudentData(props){

    const [students, setStudents] = useState([]);
    const [blockedStudents, setBlockedStudents] = useState([]);
    const [penelty, setPenelty] = useState(false);
    const [nostudentData, setNoStudentData] = useState(false);
    const [noBlockedStudentData, setNoBlockedStudentData] = useState(false);   
    const [searchDisp, setsearchDisp]= useState(false); 
    const [name, setName]=useState("");
    const [searchList, setSearchList]=useState([]);


    useEffect(()=>{

        if(new Date().getHours()>=19 || new Date().getHours()<=7){
            setPenelty(true);
        }
    
        
        fetchStudentsData();
        fetchBlockedStudentData();
    },[penelty])

const fetchStudentsData = () => {
    const database = getDatabase();
    const organisationId = props.orgId;
    if (!organisationId) return;

    const usersRef = ref(database, organisationId);
    onValue(usersRef, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            const studentsArray = Object.keys(data).map((studentName) => ({
                name: data[studentName].Name,
                phoneNo: data[studentName].PhoneNumber,
                exitTime: data[studentName].ExitTime,
                enrollmentNumber: data[studentName].EnrollmentNumber,
            }));
            setStudents(studentsArray);
            setNoStudentData(false);
        } else {
            setStudents([]);
            setNoStudentData    (true);
        }
    }, (error) => {
        console.error("Error fetching data:", error);
    });
};
    const fetchBlockedStudentData = () => {
    const database = getDatabase();
    const blockedUserRef = ref(database, "blockedStudents");
    
    onValue(blockedUserRef, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            const blockedStudentsArray = Object.keys(data).map((studentData) => ({
                name: data[studentData].Name,
                phoneNo: data[studentData].PhoneNumber,
                blockedTime: data[studentData].blockedTime,
                enrollmentNumber: data[studentData].EnrollmentNumber,
            }));
            setBlockedStudents(blockedStudentsArray);
            setNoBlockedStudentData(false);
        } else {
            setBlockedStudents([]);
            setNoBlockedStudentData(true);
        }
    }, (error) => {
        console.error("Error fetching blocked students:", error);
    });
};


    const deleteStudentData = async (studentName) => { 
        const database = getDatabase();
        const organisationId = props.orgId;
    
        if (!organisationId) {
            console.error("Organization ID is missing.");
            return;
        }
    
        // Format Time (12-hour format)
        let now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let period = hour >= 12 ? "PM" : "AM";
    
        hour = hour % 12 || 12;
        minute = minute < 10 ? `0${minute}` : minute;
        const formattedTime = `${hour}:${minute} ${period}`;
    
        // Format Date (DD-MM-YYYY)
        let day = now.getDate();
        let month = now.getMonth() + 1;  // Fixed: getMonth() starts from 0
        let year = now.getFullYear();
        let formattedDate = `${day}-${month}-${year}`;
    
        // References
        const studentRef = ref(database, `${organisationId}/${studentName}`);
        const historyRef = ref(database, `History/${formattedDate}/${studentName}`); 
    
        try {
            const snapshot = await get(studentRef);
            if (!snapshot.exists()) {
                console.log("No student data found.");
                return;
            }
    
            const studentData = snapshot.val();
            const historySnapshot = await get(historyRef);
            
            const studentHistory = historySnapshot.val();
    
            // Store in history
            await set(historyRef, {
                ...studentHistory, 
                EntryTime: formattedTime,
            });
    
            // Check Time for Blocking (After 7 PM or before 7 AM)
            const currentHour = now.getHours();
            if (currentHour >= 19 || currentHour <= 7) {
                const blockedRef = ref(database, `blockedStudents/${studentName}`);
                await set(blockedRef, {
                    ...studentData,
                    blockedTime: formattedDate,
                });
    
                setBlockedStudents(prev => [...prev, { ...studentData, blockedTime: formattedDate }]);
                setNoBlockedStudentData(false);
            }
    
            // Remove from Main List
            await remove(studentRef);
            setStudents(prev => prev.filter(student => student.name !== studentName))
    
            // Refresh UI
            fetchStudentsData(); 
    
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };
        
    
    const handleEnableOuting = async (studentName)=>{
        const database = getDatabase();
        const studentRef = ref(database, `blockedStudents/${studentName}`);
        try{
            await remove(studentRef);
            console.log(`student ${studentName} has been removed from blockList`);
            setBlockedStudents(prevBlockedStudents => prevBlockedStudents.filter(student => student.name !== studentName));
            fetchBlockedStudentData();

        } 
        catch(error){
            alert("Failed to enable outing", error);
        }

    }

    const handleStudentEntered = (studentName) => deleteStudentData(studentName);

    const handleStudentSearchBtnClick=()=>{
        setsearchDisp(true);
    }

    const handleBackSearchBtn=()=>{
        setsearchDisp(false);
        setSearchList([]);
    }

    const searchStudent = (e) => {
        const input = e.target.value;
        setName(input); // updates the state for display

        if (input.trim() === "") {
            setSearchList([]); // clear if empty
            return;
        }

        const filtered = students.filter(student =>
            student.name.toLowerCase().startsWith(input.toLowerCase())
        );

        setSearchList(filtered); // show matching results

    };


    return(
        <>
        {!nostudentData  && (
            <>
            <div className={styles.nav}>
                <h2 className={styles.title}>Students Entries:</h2>
                <button onClick={handleStudentSearchBtnClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>

            </div>
                <ol>
                    {students.map((student, index) => (
                        <li 
                            key={index} 
                            className={styles.studentItem}
                            style={penelty ? { backgroundColor: 'rgba(255, 0, 0, 0.8)' } : { backgroundColor: "aliceblue" }}
                        >
                            <div className={styles.aboveDets}>
                                <h4>{student.name}</h4>
                                <h3>{student.exitTime}</h3>
                            </div>
                            <div className={styles.belowDets}>
                                <h4><strong>Phone No.: </strong>{student.phoneNo}</h4>
                                <button 
                                    onClick={() => {
                                        handleStudentEntered(student.name);
                                    }} 
                                    className={styles.studentEnteredBtn}
                                >
                                    {penelty ? "Block Outing": "Student Entered"}
                                </button>
                            </div>
                        </li>
                    ))}
                </ol>
            </>
        )}
        {props.Admin && (
            <div>
                {!noBlockedStudentData && (<h2>Blocked Students:</h2>)}
                <ol>
                    {blockedStudents.map((student, index) => (
                        <li 
                            key={index} 
                            className={styles.studentItem}
                            style={{ backgroundColor: "aliceblue" }}
                        >
                            <div className={styles.aboveDets}>
                                <h4>{student.name}</h4>
                                <h3>{student.blockedTime}</h3>
                            </div>
                            <div className={styles.belowDets}>
                                <h5><strong>Phone No.: </strong>{student.phoneNo}</h5>
                                <button 
                                    onClick={() => {
                                        handleEnableOuting(student.name);
                                    }} 
                                    className={styles.studentEnteredBtn}
                                    style={{backgroundColor: "rgb(21, 255, 0)", color: "black"}}
                                >
                                    Enable Outing
                                </button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>   
        )}

        {searchDisp && (
            <div className={styles.searchContainer}>

                <input type="text" placeholder="Search student's name" onChange={(e)=>{searchStudent(e)}} />
                <button className={styles.closeSearchContainer} onClick={handleBackSearchBtn}>X</button>
                <br />
                <ol>
                     {searchList.map((student, index) => (
                        <li 
                            key={index} 
                            className={styles.searchedStudentItem}
                            style={penelty ? { backgroundColor: 'rgba(255, 0, 0, 0.8)' } : { backgroundColor: "aliceblue" }}
                        >
                            <div className={styles.aboveDets}>
                                <h3>{student.name}</h3>
                                <h3>{student.exitTime}</h3>
                            </div>
                            <div className={styles.belowDets}>
                                <h4><strong>Phone No.: </strong>{student.phoneNo}</h4>
                                <button 
                                    onClick={() => {
                                        handleStudentEntered(student.name)
                                    }} 
                                    className={styles.studentEnteredBtn}
                                >
                                    {penelty ? "Block Outing": "Student Entered"}
                                </button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        )}
        </>
    )
}

export default StudentData;