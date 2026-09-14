import { useEffect } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useFavoritesStore } from '../store/favorites.store'
import './Layout.css'

export default function Layout() {
  const getFavorites = useFavoritesStore((state) => state.get)

  useEffect(() => {
    getFavorites()
  }, [getFavorites])

  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
