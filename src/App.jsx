import { Routes, Route, Navigate } from "react-router-dom";
import StartingPage from "./start/start.jsx";
import LoginPage from "./Login/login.jsx";
import RegisterPage from "./register/register.jsx";
import HomePage from "./home/home.jsx";

function App() {
  return (
    <Routes>
      {/* Define a route for the root URL */}
      {/* <Route path="/" element={<Navigate to="/start" replace />} /> */}
      <Route path="/" element={<StartingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
