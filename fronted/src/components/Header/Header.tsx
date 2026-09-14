import { NavLink, useNavigate } from "react-router";
import { clearUserName } from "../../utils/user.utils";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  function loingOut() {
    clearUserName();
    navigate("/");
  }

  return (
    <header className="header">
      <span className="bsd">בס"ד</span>
      <h1>Clima Board</h1>
      <nav className="navbar">
        <NavLink to="/dashboard" className="nav-tab">
          דשבורד
        </NavLink>
        <NavLink to="/search" className="nav-tab">
          חיפוש
        </NavLink>
        <NavLink to="/favorites" className="nav-tab">
          מועדפים
        </NavLink>
        <NavLink to="/compare" className="nav-tab">
          השוואה
        </NavLink>
      </nav>
      <button className="logout-btn" onClick={loingOut}>
        התנתקות
      </button>
    </header>
  );
}
