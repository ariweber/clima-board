import { Link } from 'react-router'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found-code">404</h1>
      <h2 className="not-found-title">הדף לא נמצא</h2>
      <p className="not-found-text">נראה שהדף הזה התאדה לו לעננים...</p>
      <Link to="/" className="not-found-link">
        חזרה לדף הבית
      </Link>
    </div>
  )
}
