import { useState } from "react";
import { Link } from "react-router";
import InputUser from "../../components/InputUser/InputUser";
import "./Welcome.css";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  return (
    <div className="welcome">
      <p className="welcome-bsd">בס"ד</p>

      <header className="welcome-header">
        <h1>ברוכים הבאים לאתר מזג האוויר</h1>
        <p className="welcome-text">
          כאן תוכלו לצפות בתחזית מזג אוויר, לחפש ערים, לשמור מועדפים ולהשוות בין
          ערים
        </p>
      </header>

      <main className="content">
        <InputUser value={userName} onChange={setUserName} />

        <Link
          to="/dashboard"
          className="welcome-button"
          onClick={() => localStorage.setItem("userName", userName)}
        >
          כניסה לאתר
        </Link>
      </main>
    </div>
  );
}
