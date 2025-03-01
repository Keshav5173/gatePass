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
// import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
// import { getAuth } from "firebase/auth";

function HomePage() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState("");
    const [enrollmentNo, setEnrollmentNo] = useState("");
    const [disp, setDisp] = useState(false);
    const [students, setStudents] = useState([]);
    const [blockedStudents, setBlockedStudents] = useState([]);
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
    const [localOrganisationId, setOrganisationIdState] = useState("");
    const [penelty, setPenelty] = useState(false);
    const [nostudentData, setNoStudentData] = useState(false);
    const [noBlockedStudentData, setNoBlockedStudentData] = useState(false);
    const [outing, setOuting] = useState(true);
    const [dates, setDates] = useState([]);
    const [historyStudentArray, setHistoryStudentArray] = useState([]);

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
        fetchStudentsData();
        fetchBlockedStudentData();
        fetchDates();
    }, [organisationId, email, penelty]); 
    
    

    const fetchStudentsData = () => {
        const database = getDatabase();
        const orgId = organisationId || storedOrgId;
        if (!orgId) return;
        
        const usersRef = ref(database, orgId);
        get(usersRef)
            .then((snapshot) => {
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
                    setNoStudentData(true);
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };
    const fetchBlockedStudentData=()=>{
        const database= getDatabase();
        const blockedUserRef = ref(database, "blockedStudents");
        get(blockedUserRef)
        .then((snapshot)=>{
            if(snapshot.exists()){
                const data=snapshot.val();
                const blockedStudentsArray = Object.keys(data).map((studentData)=>({
                    name: data[studentData].Name,
                    phoneNo: data[studentData].PhoneNumber,
                    blockedTime: data[studentData].blockedTime,
                    enrollmentNumber: data[studentData].EnrollmentNumber,
                }))
                setBlockedStudents(blockedStudentsArray);
                setNoBlockedStudentData(false);
            }
            else{
                setNoBlockedStudentData(true);
                console.log("No data available");
            }

        })
    }

    const fetchDates = ()=>{
        const database = getDatabase();
        const dateRef = ref(database, "History");
        get(dateRef)
        .then((snapshot)=>{
            if(snapshot.exists()){
                const data= snapshot.val();
                const datesArray = Object.keys(data);
                setDates(datesArray);
                console.log(datesArray);
            }
        })

    }

    const deleteStudentData = async (studentName) => { 
        const database = getDatabase();
        const orgId = organisationId || storedOrgId;
    
        if (!orgId) {
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
        const studentRef = ref(database, `${orgId}/${studentName}`);
        const historyRef = ref(database, `History/${formattedDate}/${studentName}`); 
    
        try {
            const snapshot = await get(studentRef);
            if (!snapshot.exists()) {
                console.log("No student data found.");
                return;
            }
    
            const studentData = snapshot.val();
            const historySnapshot = await get(historyRef);
            console.log("Fetched student:", studentData);
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
    
                console.log(`Student ${studentName} moved to blockedStudents.`);
                setBlockedStudents(prev => [...prev, { ...studentData, blockedTime: formattedDate }]);
                setNoBlockedStudentData(false);
            }
    
            // Remove from Main List
            await remove(studentRef);
            setStudents(prev => prev.filter(student => student.name !== studentName));
            console.log(`Student ${studentName} data has been deleted.`);
    
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
    

    const sendDataToRealTimeDatabase = async (event) => {
        event.preventDefault();
    
        // Check if the time is valid
        if (new Date().getHours() > 19 || new Date().getHours() < 6) {
            alert("Not a valid time.");
            return;
        }
    
        // Get organization ID
        const orgId = organisationId || storedOrgId;
        if (!orgId) return;
    
        // Format time for ExitTime field
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let period = hour >= 12 ? "PM" : "AM";
    
        if (hour > 12) hour -= 12;
        if (hour === 0) hour = 12;
        if (minute < 10) minute = `0${minute}`;
    
        const formattedTime = `${hour}:${minute} ${period}`;
        let day = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let formattedDate = `${day}-${month+1}-${year}`;
    
        // Get reference to studentDataSet collection in Firestore
        const studentDataSetRef = collection(db, "studentDataSet");
    
        onSnapshot(studentDataSetRef, async (querySnapshot) => {
            const studentList = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                key: doc.id,
            }));
    
            const foundStudent = studentList.find(student => student.enrollment === enrollmentNo);
    
            if (foundStudent) {
                // Set student data
                setName(foundStudent.studentName);
                setPhoneNo(foundStudent.phoneNo);
    
                // Initialize both databases if needed
                const database = getDatabase(); // First database
                const database2 = getDatabase(); // Second database (if needed)
    
                // Check if student is blocked in database2 (or use any other database as needed)
                const blockedStudentsListRef = ref(database2, `blockedStudents`);
                const snapshot = await get(blockedStudentsListRef);
    
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const blockedStudent = Object.keys(data).find(studentName => data[studentName].EnrollmentNumber === enrollmentNo);
    
                    if (blockedStudent) {
                        alert("This student is blocked");
                        setDisp(false);
                        return; 
                    }
                }
    
                // Initialize userRef in the first database
                const userRef = ref(database, `${orgId}/${foundStudent.studentName}`);
                const historyRef = ref(database, `History/${formattedDate}/${foundStudent.studentName}`); 
                
                
                
                set(userRef, {
                    Name: foundStudent.studentName,
                    PhoneNumber: foundStudent.phoneNo,
                    EnrollmentNumber: enrollmentNo,
                    ExitTime: formattedTime,
                })
                    .then(() => {
                        set(historyRef, {
                            Name: foundStudent.studentName,
                            PhoneNumber: foundStudent.phoneNo,
                            EnrollmentNumber: enrollmentNo,
                            ExitTime: formattedTime,
                            EntryTime: "",
                        })
                        console.log("Student data saved successfully!");
                        fetchStudentsData();
                        clearForm();
                        setDisp(false);
                    })
                    .catch((error) => {
                        console.error("Error saving data:", error);
                        alert("Failed to save student data.");
                    });
            } else {
                alert("Student not found!");
            }
        });
    };
    
    

    const clearForm = () => {
        setEnrollmentNo("");
        setDisp(false);
    };
    const handleRegisterBtn = (event) => {
        event.preventDefault()
        console.log("clicked");
        // navigate("/register"); 
        setAddUser(true);
      };

    const handleStudentEntered = (studentName) => deleteStudentData(studentName);
    const handleAddStudentClick = () => setDisp(true);
    const handleBackBtn = () => setDisp(false);
    const handleEnrollmentNoChange = (e) => setEnrollmentNo(e.target.value);
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

    const handleBackRegisterButton = () => {
            setAddUser(false);
        };
    
        const onSubmit = async (e) => {
            e.preventDefault();
        
            if (isRegisteringIn) return;
        
            setIsRegisteringIn(true);
        
            try {

                const userDocRef = collection(db, "UserData");
        
                // You can create additional data fields if needed
                await addDoc(userDocRef, {
                    name: localUserName,
                    email: localEmail,
                    orgId: localOrganisationId,
                    password: password,
                    createdAt: new Date(),
                });
        
                setUserName(localUserName);
                setAddUser(false);
            } catch (error) {
                console.error("Registration failed:", error);
                let errorMessage = "An error occurred.";
                if (error.code === "auth/email-already-in-use") {
                    errorMessage = "This email is already in use.";
                } else if (error.code === "auth/invalid-email") {
                    errorMessage = "Invalid email address.";
                }
                alert("Registration failed: " + errorMessage);
            } finally {
                setIsRegisteringIn(false);
            }
        };

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
                console.log("Updated History Data:", studentArray);
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
                        {!nostudentData && outing && (
                            <>
                                <h2 className={styles.title}>Students Entries:</h2>
                                <ol>
                                    {students.map((student, index) => (
                                        <li 
                                            key={index} 
                                            className={styles.studentItem}
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
                        {admin && outing && (
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
                                                <h3>{student.name}</h3>
                                                <h3>{student.blockedTime}</h3>
                                            </div>
                                            <div className={styles.belowDets}>
                                                <h4><strong>Phone No.: </strong>{student.phoneNo}</h4>
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
                        {!outing && (
                            <div>
                                <select onChange={(event)=>{handleFetchOnDateHistory(event)}} name="Dates">
                                    <option>Select Date</option>
                                    {dates.map((date, index) => (
                                        <option key={index} value={date}>{date}</option>
                                    ))}
                                </select>
                                <ol>
                                    {historyStudentArray.map((student, index) => (
                                        <li 
                                            key={index} 
                                            className={styles.studentItem}
                                            style={{backgroundColor: "aliceblue"}}
                                        >
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
                                </ol>
                            </div>
                        
                        )}
                    </div>
                </div>
            )}
            {!suscribed && (
                <div className={styles.footer}>
                    <div className={styles.addStudent} onClick={handleAddStudentClick}>Student Entry</div>
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
            {profile &&
            (<div className={styles.profile}>
                <svg onClick={handleProfileBack} className={styles.profileBack} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                <div className={styles.profilePic}>
                    <img src="profilePic.avif" alt="" />
                    
                </div>
                <button onClick={handleLogOutBtn} className={styles.logoutBtn}>Log out</button>
                { admin && 
                (<button onClick={(event)=>handleRegisterBtn(event)} className={styles.register}>Add Member</button>
                )}
            </div>)}
            {addUser && (
                    <div className={styles.registerMain}>
                    
        
                    <nav>
                        <button onClick={handleBackRegisterButton} className={styles.backRegister}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                            </svg>
                        </button>
                    </nav>
        
                    <div className={styles.registerHero}>
                         <form onSubmit={onSubmit}>
                            <input
                                className={styles.inputUsername}
                                required
                                value={localUserName}
                                onChange={(e) => {
                                    setLocalUserName(e.target.value);
                                    setUserName(e.target.value);
                                }}
                                type="text"
                                placeholder="Enter your username"
                            />
                            <input
                                className={styles.inputEmail}
                                autoComplete="email"
                                required
                                value={localEmail}
                                onChange={(e) => setLocalEmail(e.target.value)}
                                type="email"
                                placeholder="Enter your email"
                            />
                            <input
                                className={styles.inputPassword}
                                disabled={isRegisteringIn}
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Enter your Password"
                            />
                            <input
                                className={styles.inputOrganisationId}
                                disabled={isRegisteringIn}
                                autoComplete="organization"
                                required
                                value={localOrganisationId}
                                onChange={(e) => setOrganisationIdState(e.target.value)}
                                type="text"
                                placeholder="Enter Organisation Id"
                            />
                            <button
                                className={styles.loginBtn}
                                disabled={isRegisteringIn}
                                type="submit"
                            >
                                {isRegisteringIn ? 'Signing Up...' : 'Sign Up'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HomePage;
