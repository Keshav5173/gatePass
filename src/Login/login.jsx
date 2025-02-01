import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";

import { 
    doSignInWithEmailAndPassword, 
    doSendEmailVerification, 
    handleRedirectResult, 
    doPasswordReset 
} from "../firebase/auth";
import { useAuth } from "../contexts/authContext";
import { useOrganisation } from "../contexts/authContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Navigate } from "react-router-dom";

function Login() {

    const { setOrganisationId } = useOrganisation();
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignIn, setIsSignIn] = useState(false);
    const [organisationId, setOrganisationIdState] = useState(''); // Updated to one state

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

            const foundOrganisation = users.find(user => user.orgId === organisationId);

            if (!foundOrganisation) {
                alert("Invalid Organisation ID");
                setIsSignIn(false);
                return;
            }

            // Setting the Organisation ID in the context
            setOrganisationId(organisationId);
            await doSignInWithEmailAndPassword(email, password);
            navigate("/home", { state: { organisationId } });

        } catch (error) {
            alert(error.message);
            console.log("Organisation ID after submission:", organisationId);
            console.log(error);
            setIsSignIn(false);
        }
    };

    const handleForgetPassword = () => {
        if (!email) {
            alert("Please enter your email first!");
            return;
        }
        doPasswordReset(email)
            .then(() => alert("Password reset email sent! Check your inbox."))
            .catch((error) => alert("Error: " + error.message));
    };

    const handleBackButton = () => {
        navigate('/start');
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
            <div className={styles.hero}>
                <h1 className={styles.welcome}>Welcome!</h1>
                <h2 className={styles.continue}>Sign in to continue</h2>
                
                <form onSubmit={onSubmit}>
                    <input
                        className={styles.inputEmail}
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        className={styles.inputPassword}
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter your Password"
                    />
                    <input
                        className={styles.inputOrganisationId}
                        required
                        value={organisationId}
                        onChange={(e) => setOrganisationIdState(e.target.value)} // Using the updated state
                        type="text"
                        placeholder="Enter Organisation ID"
                    />
                    
                    <button className={styles.loginBtn} disabled={isSignIn} type="submit">
                        {isSignIn ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                <button onClick={handleForgetPassword} className={styles.forgetPassword}>Forget password?</button>
                <div className={styles.line}>
                    <span>or</span>
                </div>

                <h5 className={styles.signUp}>
                    Don't have an account? <Link to={'/register'}><button>Sign up</button></Link>
                </h5>
            </div>
        </div>
    );
}

export default Login;
