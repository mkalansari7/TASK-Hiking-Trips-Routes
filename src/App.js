import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Routes, Route } from "react-router";
import TripsListEasy from "./components/TripsListEasy";
import TripsListModerate from "./components/TripsListModerate";
import TripsListHard from "./components/TripsListHard";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<TripsList />} />
        <Route path="/trips/easy" element={<TripsListEasy />} />
        <Route path="/trips/moderate" element={<TripsListModerate />} />
        <Route path="/trips/hard" element={<TripsListHard />} />
        <Route path="/trips/:slug" element={<TripDetail />} />
      </Routes>
    </div>
  );
}

export default App;
