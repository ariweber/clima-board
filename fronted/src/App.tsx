import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Welcome from "./pages/Welcome/Welcome";
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from "./pages/Search/Search";
import CityDetails from "./pages/CityDetails/CityDetails";
import Favorites from "./pages/Favorites/Favorites";
import Compare from "./pages/Compare/Compare";
import NotFound from "./pages/NotFound/NotFound";
import Protected from "./components/Protected/Protected";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          element={
            <Protected>
              <Layout />
            </Protected>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/city/:cityName" element={<CityDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/compare" element={<Compare />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
