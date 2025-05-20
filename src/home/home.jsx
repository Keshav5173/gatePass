import { useState, useEffect } from "react";
import styles from "./home.module.css";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import { useAuth } from "../contexts/authContext/index";
import { database, db } from "../firebase/firebase";
import { addDoc, CollectionReference, doc, setDoc } from "firebase/firestore";
import { doSignOut } from "../firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useOrganisation } from "../contexts/authContext";
import *as XLSX from "xlsx"
import StudentHistory from "../studentHistory/studentHistory.jsx";
import StudentData from "../studentData/studentData.jsx"



// import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
// import { getAuth } from "firebase/auth";

function HomePage() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState("");
    const [enrollmentNo, setEnrollmentNo] = useState("");
    const [disp, setDisp] = useState(false);
    const [profile, setProfile] = useState(false);
    const [suscribed, setSuscribed] = useState(false);
    const { organisationId } = useOrganisation();
    const {email} = useOrganisation();
    const [storedOrgId, setStoredOrgId] = useState(localStorage.getItem("organisationId") || "");
    const [storedEmailId, setStoredEmailId] = useState(localStorage.getItem("emailId") || "");
    const [admin, setAdmin] = useState(false);
    const [addUser, setAddUser] = useState(false);
    const { userLoggedIn, setUserName } = useAuth();
    const { setOrganisationId } = useOrganisation();
    const {setEmail} = useOrganisation();
    const [localUserName, setLocalUserName] = useState('');  
    const [localEmail, setLocalEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegisteringIn, setIsRegisteringIn] = useState(false);
    const [penelty, setPenelty] = useState(false);
    const [outing, setOuting] = useState(true);
    const [dispVacation, setDispVacation]=useState(false);
    const [outingReason, setOutingReason]=useState("");
    const [returnDate, setReturnDate]=useState("");

    useEffect(() => {
        
        const currentTime = new Date().getHours();
        console.log("curentTime: ", currentTime);
        if(new Date().getHours()>=19 || new Date().getHours()<=7){
            setPenelty(true);
        }
        console.log("Penelty time: ", penelty);
        let storedOrg = localStorage.getItem("organisationId");
        let storedEmail = localStorage.getItem("emailId");

        if((!organisationId && !storedOrg) || (!email && !storedEmail)){
            // alert("Navigate to Login Page");
            navigate("/login");
        }
    
        // Ensure organisationId is set correctly
        if (!organisationId && storedOrg) {
            setStoredOrgId(storedOrg);
        }
        if (organisationId) {
            setStoredOrgId(organisationId);
            localStorage.setItem("organisationId", organisationId);
        }
    
        // Ensure email is set correctly
        if (!email && storedEmail) {
            setStoredEmailId(storedEmail);
        }
        if (email) {
            setStoredEmailId(email);
            localStorage.setItem("emailId", email);
        }
    
        setAdmin((prevAdmin) => {
            const currentEmail = storedEmail || email; // Use latest available email
            const isAdminUser = currentEmail === "bhardwajkeshav5173@gmail.com" || currentEmail==="sharmapalak27062004@gmail.com";
            console.log("Email (Admin Check):", currentEmail);
            console.log("isAdmin (Updated):", isAdminUser);
            return isAdminUser;
        });    

        // fetchDates();
        // fetchLongVacationStudent();
    }, [organisationId, email, penelty]); 
    
    

    const sendDataToRealTimeDatabase = async (event) => {
        event.preventDefault();
    
        // ✅ Check if the time is valid (only allow 6 AM - 7 PM)
        const currentHour = new Date().getHours();
        if (currentHour >= 19 || currentHour <= 7) {
            alert("Not a valid time.");
            return;
        }
    
        // ✅ Get organization ID
        const orgId = organisationId || storedOrgId;
        if (!orgId) {
            alert("Organization ID not found.");
            return;
        }
    
        // ✅ Format time
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let period = hour >= 12 ? "PM" : "AM";
    
        if (hour > 12) hour -= 12;
        if (hour === 0) hour = 12;
        if (minute < 10) minute = `0${minute}`;
    
        const formattedTime = `${hour}:${minute} ${period}`;
        let day = new Date().getDate();
        let month = new Date().getMonth() + 1; // Fix: Month is zero-based
        let year = new Date().getFullYear();
        let formattedDate = `${day}-${month}-${year}`;
    
        try {
            // ✅ Fetch Excel file from `/public/`
            const file = await fetch("/StudentDatabase.xlsx");
            const data = await file.arrayBuffer();
    
            // ✅ Read Excel file
            const excelfile = XLSX.read(data, { type: "array" });
            const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]];
            const exceljson = XLSX.utils.sheet_to_json(excelsheet);

    
            // ✅ Format data properly
            const studentDataset = exceljson.map(student => ({
                Name: student.studentName,
                phoneNo: student.phoneNo,
                EnrollmentNo: student.enrollment // Fix: Ensure correct field
            }));
    
            console.log("Student Data:", studentDataset);
    
            // ✅ Find student using correct key
            const foundStudent = studentDataset.find(student => `${student.EnrollmentNo}` === enrollmentNo);
    
            if (foundStudent) {
                // ✅ Set student data
                setName(foundStudent.Name);
                setPhoneNo(foundStudent.phoneNo);
    
                // ✅ Initialize database
                const database = getDatabase();
                const database2 = getDatabase();
    
                // ✅ Check if student is blocked
                const blockedStudentsListRef = ref(database2, `blockedStudents`);
                const snapshot = await get(blockedStudentsListRef);
    
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const blockedStudent = Object.keys(data).find(
                        studentName => data[studentName].EnrollmentNumber === enrollmentNo
                    );
    
                    if (blockedStudent) {
                        alert("This student is blocked");
                        setDisp(false);
                        return;
                    }
                }
    
                // ✅ Set student data in database
                const userRef = ref(database, `${orgId}/${foundStudent.Name}`);
                const historyRef = ref(database, `History/${formattedDate}/${foundStudent.Name}`);
    
                await set(userRef, {
                    Name: foundStudent.Name,
                    PhoneNumber: foundStudent.phoneNo,
                    EnrollmentNumber: enrollmentNo,
                    ExitTime: formattedTime
                });
    
                await set(historyRef, {
                    Name: foundStudent.Name,
                    PhoneNumber: foundStudent.phoneNo,
                    EnrollmentNumber: enrollmentNo,
                    ExitTime: formattedTime,
                    EntryTime: ""
                });
    
                console.log("Student data saved successfully!");
                clearForm();
                setDisp(false);
            } else {
                alert("Student not found!");
            }
        } catch (error) {
            console.error("Error processing data:", error);
            alert("An error occurred while processing the Excel file.");
        }
    };

    const sendDataforLongOuting= async ()=>{
        let day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let formattedDate = `${day}-${month}-${year}`;
        const file = await fetch("/StudentDatabase.xlsx");
        const data = await file.arrayBuffer();

        // ✅ Read Excel file
        const excelfile = XLSX.read(data, { type: "array" });
        const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]];
        const exceljson = XLSX.utils.sheet_to_json(excelsheet);

    
            // ✅ Format data properly
        const studentDataset = exceljson.map(student => ({
            Name: student.studentName,
            phoneNo: student.phoneNo,
            EnrollmentNo: student.enrollment // Fix: Ensure correct field
        }));
    
        console.log("Student Data:", studentDataset);
    
            // ✅ Find student using correct key
        const foundStudent = studentDataset.find(student => `${student.EnrollmentNo}` === enrollmentNo);

        if(foundStudent){
            const userRef = ref(database, `Vacations/${foundStudent.Name}`);

            await set(userRef, {
                Name: foundStudent.Name,
                PhoneNumber: foundStudent.phoneNo,
                EnrollmentNumber: enrollmentNo,
                ExitTime: formattedDate,
                Reason: outingReason,
                ReturnDate: returnDate,
            });
            setDispVacation(false);
        }
    }
    
    
    

    const clearForm = () => {
        setEnrollmentNo("");
        setDisp(false);
    };
    const handleRegisterBtn = (event) => {
        event.preventDefault()
        console.log("clicked");
        navigate("/register"); 
      };

    const handleAddStudentClick = () => setDisp(true);
    const handleVacationClick = ()=> setDispVacation(true);
    const handleBackBtn = () => {
        setDisp(false);
        setDispVacation(false);
    };
    const handleEnrollmentNoChange = (e) => setEnrollmentNo(e.target.value);
    const handleReasonChange=(e)=>setOutingReason(e.target.value)
    const handleProfileClick = () => setProfile(true);
    const handleProfileBack = () => setProfile(false);
    const handleOutingClick = ()=> {
        setOuting(true);

    }
    const handleShowHistory=()=>{
        setOuting(false);
    }

    const handleLogOutBtn = () => {
        doSignOut().then(() => {
            localStorage.removeItem("organisationId"); 
            localStorage.removeItem("emailId");
            navigate("/login");
        });
    };
    
        

    return(
        <div className={styles.main}>
            <div className={styles.nav}>
                <img className={styles.logo} src="x.png" alt="logo" />
                <svg onClick={handleProfileClick} className={styles.account} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
            </div>
            {!suscribed && (
                <div className={styles.hero}>
                    {admin && (
                        <div className={styles.switchMode}>
                            <button onClick={handleOutingClick}>Outing</button>
                            <button onClick={handleShowHistory}>History</button>
                        </div>
                    )}
                    <div className={styles.outsideStudentsList} style={{ top: admin ? "17%" : "8%" }}>

                        {outing && (<StudentData Admin={admin} orgId={organisationId || storedOrgId} />)}
                        
                        {!outing && (<StudentHistory />)}

                    </div>
                </div>
            )}
            {!suscribed && (
                <div className={styles.footer}>

                    <div className={styles.addStudent} onClick={handleVacationClick}>Vacations</div>
                    <div className={styles.addStudent} onClick={handleAddStudentClick}> Student Outing</div>
                </div>
            )}
            
            {disp &&
            (<div className={styles.StudentEntrySection}>
                <form onSubmit={sendDataToRealTimeDatabase}>
                <input type="number" required onChange={(e)=>{handleEnrollmentNoChange(e)}} className={styles.inputEnrollment}  placeholder="Enter Enrollment number"/>
                <button type="submit" className={styles.submitBtn}>Submit</button>
                </form>
                <div className={styles.cross} onClick={handleBackBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                </div>
            </div>)}

            {dispVacation &&
            (<div className={styles.StudentLongOutingSection}>
                <form onSubmit={sendDataforLongOuting}>
                <input type="number" required onChange={(e)=>{handleEnrollmentNoChange(e)}} className={styles.vacationInputEnrollment}  placeholder="Enter Enrollment number"/>
                <select required className={styles.inputOutingReason} onChange={handleReasonChange}>
                    <option value="Went Home">Going Home</option>
                    <option value="In Event">Going in Event</option>
                </select>
                <h4 className={styles.datesText}>Enter Return Date</h4>
                <input onChange={(e)=>setReturnDate(e.target.value)} className={styles.inputDate} required type="date" />
                <button type="submit" className={styles.submitVacBtn}>Submit</button>
                </form>
                <div className={styles.cross} onClick={handleBackBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                </div>
            </div>)}

            {profile &&
            (<div className={styles.profile}>
                <svg onClick={handleProfileBack} className={styles.profileBack} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                <div className={styles.profilePic}>
                    <img src="profilePic.avif" alt="" />
                    
                </div>
                <h4 className={styles.userEmail}>{storedEmailId}</h4>
                <button onClick={handleLogOutBtn} className={styles.logoutBtn}>Log out</button>
                { admin && 
                (<button onClick={(event)=>handleRegisterBtn(event)} className={styles.register}>Add Member</button>
                )}
            </div>)}
        </div>
    )
}

export default HomePage;
