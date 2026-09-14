import { Link } from 'react-router'
import DefaultCity from '../../components/DefaultCity/DefaultCity'
import { getUserName } from '../../utils/user.utils'
import './Dashboard.css'

export default function Dashboard() {
  const userName = getUserName()

  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">שלום {userName} </h1>
      <p className="dashboard-subtitle">ברוכים הבאים לאתר מזג אוויר</p>

      <nav className="dashboard-options">
        <Link to="/search" className="dashboard-option">
          <span className="dashboard-option-icon">🔍</span>
          <span>חיפוש</span>
        </Link>
        <Link to="/favorites" className="dashboard-option">
          <span className="dashboard-option-icon">⭐</span>
          <span>מועדפים</span>
        </Link>
      </nav>

      <section className="dashboard-default-city">
        <DefaultCity />
      </section>
    </div>
  )
}
