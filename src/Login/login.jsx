import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import {collection,query,where,getDocs, doc, updateDoc } from "firebase/firestore";

import { 
    doSignInWithEmailAndPassword, 
    doSendEmailVerification, 
    handleRedirectResult, 
    doPasswordReset 
} from "../firebase/auth";
import { useAuth } from "../contexts/authContext";
import { useOrganisation } from "../contexts/authContext";

import { db } from "../firebase/firebase";
import { Navigate } from "react-router-dom";


function Login() {

    const { setOrganisationId } = useOrganisation();
    const {setEmail}= useOrganisation();
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();
    const [localEmail, setLocalEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignIn, setIsSignIn] = useState(false);
    const [organisationId, setOrganisationIdState] = useState('');
    const [newPass, setNewPass] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [settingNewPass, setSettingNewPass] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const [visibility2, setVisibility2] = useState(false);


    useEffect(() => {
        const checkRedirectResult = async () => {
            const user = await handleRedirectResult();
            if (user) {
                console.log("User signed in via redirect:", user);
                navigate("/home"); // Redirect to home if sign-in is successful
            }
        };
        checkRedirectResult();
    }, [navigate]);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (isSignIn) return;

        setIsSignIn(true);

        // Check if organisationId is defined before proceeding
        if (!organisationId.trim()) {
            alert("Please enter a valid Organisation ID");
            setIsSignIn(false);
            return;
        }

        try {
            const querySnapshot = await getDocs(collection(db, "UserData"));
            const users = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            console.log("Users from Firestore:", users);

            const foundOrganisation = users.find(user => user.orgId === organisationId && user.email===localEmail && user.password===password);

            if (!foundOrganisation) {
                alert("Invalid data");
                setLocalEmail("");
                setPassword("");
                setOrganisationId("");
                setIsSignIn(false);
                return;
            }

            // Setting the Organisation ID in the context
            setOrganisationId(organisationId);
            setEmail(localEmail);
            
            // await doSignInWithEmailAndPassword(localEmail, password);
            navigate("/home", { state: { organisationId } });

        } catch (error) {
            alert(error.message);
            console.log("Organisation ID after submission:", organisationId);
            console.log(error);
            setIsSignIn(false);
        }
    };

    const handleForgetPassword = async () => {
        setNewPass(true);
        
    };
    const updateNewPassword = async (e) => {
        e.preventDefault();  // Prevent form submission refresh
    
        try {
            setSettingNewPass(true);  // ✅ Use the correct function
    
            if (newPassword !== confirmNewPassword) {
                alert("Passwords do not match!");
                setSettingNewPass(false);  // ✅ Use the correct function
                return;
            }
    
            // Query Firestore for the user
            const userRef = collection(db, "UserData");
            const q = query(userRef, where("email", "==", localEmail));
            const querySnapshot = await getDocs(q);
    
            if (!querySnapshot.empty) {
                const userDoc = querySnapshot.docs[0]; // Get first matching document
                const userDocRef = doc(db, "UserData", userDoc.id);
    
                // 🔹 Ensure updateDoc is actually updating Firestore
                await updateDoc(userDocRef, { password: newPassword });
    
                setNewPass(false);
            } else {
                alert("Email not found!");
            }
        } catch (error) {
            console.error("Error updating password:", error.message);
            alert("Something went wrong: " + error.message);
        } finally {
            setSettingNewPass(false);
        }
    };

    const handleBackButton = () => {
        if(newPass){
            setNewPass(false);
        }
        else{
            navigate("/");
        }
    };

    return (
        <div className={styles.main}>
            {userLoggedIn && <Navigate to={'/home'} replace={true} />}
            <nav>
                <button onClick={handleBackButton} className={styles.back}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                    </svg>
                </button>
            </nav>
            {!newPass && (
                <div className={styles.hero}>
                    
                        <h1 className={styles.welcome}>Welcome!</h1>
                        <h2 className={styles.continue}>Sign in to continue</h2>
                    
                    
                        <form onSubmit={onSubmit}>
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
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={visibility?"text": "password"}
                                placeholder={newPass ? "Enter New password": "Enter password"}
                                
                            />

                            <button type="button" onClick={()=>setVisibility(!visibility)}
                                style={{border: "none"}}
                                >
                                {!visibility ? (
                                            <svg className={styles.passVisibility} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/>
                                            </svg>
                                        ) : (
                                            <svg className={styles.passVisibility} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                                            </svg>
                                        )}
                           </button>
                            
                            <input 
                                className={styles.inputOrganisationId}
                                required
                                value={organisationId}
                                onChange={(e) => setOrganisationIdState(e.target.value)} // Using the updated state
                                type="text"
                                placeholder="Enter Organisation ID"
                            />
                            
                            <button onClick={handleForgetPassword} className={styles.forgetPassword}>Forget password?</button>
                            <button className={styles.loginBtn} disabled={isSignIn} type="submit">
                                {isSignIn ? 'Signing In...' : 'Sign In'}
                            </button>
                        </form>
                    </div>
                )}

                
                {newPass && (
                    <div className={styles.resetPass}>
                        <h1>Set New Password</h1>
                        <form onSubmit={updateNewPassword}>
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
                                className={styles.inputNewPassword}
                                autoComplete="new-password"
                                required
                                value={newPassword}
                                onChange={(e)=>{setNewPassword(e.target.value)}}
                                type={visibility? "text": "password"}
                                placeholder={newPass ? "Enter New password": "Enter password"}
                            />
                            
                           <button type="button" onClick={()=>setVisibility(!visibility)} style={{border: "none"}}>
                                {!visibility ? (
                                            <svg className={styles.passVisibility} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/>
                                            </svg>
                                        ) : (
                                            <svg className={styles.passVisibility} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                                            </svg>
                                        )}
                           </button>
                           

                            <input
                                className={styles.inputConfirmNewPassword}
                                autoComplete="new-password"
                                required
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                type={visibility2 ? "text" : "password"}  
                                placeholder="Confirm New Password"
                            />

                            <button type="button" onClick={() => setVisibility2(!visibility2)} style={{border: "none"}}>  
                                {!visibility2 ? (
                                    <svg className={styles.passVisibility} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/>
                                    </svg>
                                ) : (
                                    <svg className={styles.passVisibility} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                                    </svg>
                                )}
                            </button>

                            <button className={styles.updateNewPassBtn} disabled={settingNewPass} type="submit">
                                {settingNewPass ? 'Updating....' : 'Update Data'}
                            </button>
                        </form>

                    </div>
                )}
        </div>
    );
}

export default Login;
