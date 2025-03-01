import { useNavigate } from "react-router-dom"; 
import styles from "./start.module.css";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext/index";  // Import the auth context

function StartingPage() {
  const navigate = useNavigate(); 
  const { userLoggedIn } = useAuth();  // Get the logged-in state from the context

  // Redirect to home if the user is already logged in
  if (userLoggedIn) {
    return <Navigate to="/home" replace={true} />;
  }

  const handleLogin = () => {
    navigate("/login"); 
  };

  

  return (
    <div className={styles.buttons}>
      <div className={styles.nav}>
        <h1 className={styles.appName}>Gate Pass+</h1>
        <img className={styles.logo} src="tecXaroLogo.png" alt="Logo" />
      </div>
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
                          
      
                      </div>
      <div className={styles.footer}>
        <div className={styles.login}>
          <button className={styles.btn} onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default StartingPage;
