import { useState } from "react";
import { useNavigate } from "react-router";
import InputUser from "../../components/InputUser/InputUser";
import { isValidUserName, saveUserName } from "../../utils/user.utils";
import "./Welcome.css";

export default function Welcome() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleUser = () => {
    if (!isValidUserName(userName)) {
      alert("כינוי חייב להכיל לפחות 2 תווים");
      return;
    }
    saveUserName(userName);
    navigate("/dashboard");
  };

  return (
    <div className="welcome">
      <header className="welcome-header">
        <h1>ברוכים הבאים לאתר מזג האוויר</h1>
        <p className="welcome-text">
          כאן תוכלו לצפות בתחזית מזג אוויר, לחפש ערים, לשמור מועדפים ולהשוות בין
          ערים
        </p>
      </header>

      <main className="welcome-content">
        <InputUser value={userName} onChange={setUserName} />
        <button className="welcome-button" onClick={handleUser}>
          כניסה לאתר
        </button>
      </main>
    </div>
  );
}
