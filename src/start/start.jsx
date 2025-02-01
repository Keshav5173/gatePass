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

  const handleRegister = () => {
    navigate("/register"); 
  };

  return (
    <div className={styles.buttons}>
      <img className={styles.logo} src="tecXaroLogo.png" alt="Logo" />
      <h1>Gate Pass+</h1>
      <div className={styles.login}>
        <button onClick={handleLogin}>Login</button>
      </div>

      <div className={styles.register}>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default StartingPage;
