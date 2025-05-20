import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import styles from "./register.module.css";
import { useAuth } from "../contexts/authContext/index";
import { useOrganisation } from "../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import { db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

function Register() {
    const { userLoggedIn, setUserName } = useAuth();
    const { setOrganisationId } = useOrganisation();
    const {setEmail} = useOrganisation();
    const [localUserName, setLocalUserName] = useState('');  
    const [localEmail, setLocalEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegisteringIn, setIsRegisteringIn] = useState(false);
    // const [organisationId, setOrganisationIdState] = useState("");
    const [localOrganisationId, setOrganisationIdState] = useState("");

    const navigate = useNavigate();
    
    const handleBackButton = () => {
        navigate(-1);
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

    const handleBackRegisterButton=()=>{
        navigate(-1);
    }

    return (
        <div className={styles.registerMain}>
                    
        
            <nav>
                <button onClick={handleBackRegisterButton} className={styles.backRegister}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                </button>
            </nav>

            <div className={styles.registerHero}>
                <h1 className={styles.hiiText}>Hii..</h1>
                <h1 className={styles.registerText}>Register new member</h1>
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
);
}

export default Register;
