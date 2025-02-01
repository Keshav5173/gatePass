import { useState, useEffect } from "react";
import styles from "./home.module.css";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import { db } from "../firebase/firebase";
import { doSignOut } from "../firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useOrganisation } from "../contexts/authContext";

function HomePage() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState("");
    const [enrollmentNo, setEnrollmentNo] = useState("");
    const [disp, setDisp] = useState(false);
    const [students, setStudents] = useState([]);
    const [profile, setProfile] = useState(false);
    const [suscribed, setSuscribed] = useState(false);
    const { organisationId } = useOrganisation();
    const [storedOrgId, setStoredOrgId] = useState(localStorage.getItem("organisationId") || "");

    useEffect(() => {
        if (!organisationId && !storedOrgId) {
            console.error("Organisation ID is missing. Redirecting to login...");
            navigate("/login"); // Redirect if no organisationId is found
        } else {
            if (!organisationId) {
                localStorage.setItem("organisationId", storedOrgId); 
            } else {
                setStoredOrgId(organisationId);
                localStorage.setItem("organisationId", organisationId);
            }
            fetchStudentsData();
        }
    }, [organisationId]);

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
                    }));
                    setStudents(studentsArray);
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const deleteStudentData = (studentName) => {
        const database = getDatabase();
        const orgId = organisationId || storedOrgId;
        if (!orgId) return;

        const studentRef = ref(database, `${orgId}/${studentName}`);
        remove(studentRef)
            .then(() => {
                console.log(`Student ${studentName} data has been deleted.`);
                fetchStudentsData();
            })
            .catch((error) => {
                console.error("Error deleting data:", error);
            });
    };

    const sendDataToRealTimeDatabase = async (event) => {
        event.preventDefault();
        const orgId = organisationId || storedOrgId;
        if (!orgId) return;

        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let period = hour >= 12 ? "PM" : "AM";

        if (hour > 12) hour -= 12;
        if (hour === 0) hour = 12;
        if (minute < 10) minute = `0${minute}`;

        const formattedTime = `${hour}:${minute} ${period}`;
        const studentDataSetRef = collection(db, "studentDataSet");

        onSnapshot(studentDataSetRef, (querySnapshot) => {
            const studentList = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                key: doc.id,
            }));

            const foundStudent = studentList.find(student => student.enrollment === enrollmentNo);
            if (foundStudent) {
                setName(foundStudent.studentName);
                setPhoneNo(foundStudent.phoneNo);

                const database = getDatabase();
                const userRef = ref(database, `${orgId}/${foundStudent.studentName}`);

                set(userRef, {
                    Name: foundStudent.studentName,
                    PhoneNumber: foundStudent.phoneNo,
                    EnrollmentNumber: enrollmentNo,
                    ExitTime: formattedTime,
                })
                .then(() => {
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

    const handleStudentEntered = (studentName) => deleteStudentData(studentName);
    const handleAddStudentClick = () => setDisp(true);
    const handleBackBtn = () => setDisp(false);
    const handleEnrollmentNoChange = (e) => setEnrollmentNo(e.target.value);
    const handleProfileClick = () => setProfile(true);
    const handleProfileBack = () => setProfile(false);

    const handleLogOutBtn = () => {
        doSignOut().then(() => {
            localStorage.removeItem("organisationId"); // Clear storage on logout
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
                    <h2 className={styles.title}>Students Entries:</h2>
                    <div className={styles.outsideStudentsList}>
                        <ol>
                            {students.map((student, index) => (
                                <li key={index} className={styles.studentItem}>
                                    <div className={styles.aboveDets}>
                                        <h2>{student.name}</h2>
                                        <h3>{student.exitTime}</h3>
                                    </div>
                                    <div className={styles.belowDets}>
                                        <h4><strong>Phone No.: </strong>{student.phoneNo}</h4>
                                        <button onClick={()=>{handleStudentEntered(student.name)}} className={styles.studentEnteredBtn}>Student Entered</button>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            )}
            {!suscribed && (
                <div className={styles.footer}>
                    <div className={styles.addStudent} onClick={handleAddStudentClick}>Student Entry</div>
                </div>
            )}
            {suscribed &&
            (
                <div className={styles.paymentPage}>
                    <p className={styles.textInfo}>The <span className={styles.highText}>GatePass+</span> addresses a significant issue in hostel
                        management, where students manually record their entries and exits
                        in physical registers. This traditional system is highly prone to 
                        errors, as <span className={styles.highText}>students often fill in 
                        incorrect details,</span> manipulate their entry times, or even evade 
                        proper logging. Additionally, managing and retrieving past records 
                        becomes cumbersome, leading to inefficiencies in tracking student 
                        movements. To solve this, the app provides a 
                        <span className={styles.highText}>digital solution</span> where 
                        hostel security can seamlessly enter a students 
                        enrollment number and this app will fetch rest important information 
                        from database, ensuring accurate and tamper-proof logging of 
                        <span className={styles.highText}>  entries and exits.</span> The 
                        system also enables <span className={styles.highText}> real-time 
                        tracking </span>of students currently outside the campus and maintains a 
                        structured history of all movements significantly improving 
                        ,<span className={styles.highText}>security, accountability, and administrative efficiency.</span></p>
                    <button className={styles.registerBtn}>Register Now!</button>

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
            </div>)}
        </div>
    )
    
}

export default HomePage;
