import React, { useState } from "react";
import tripsData from "../tripsData";
import SearchBar from "./SearchBar";
import TripItem from "./TripItem";
import { Navigate } from "react-router-dom";

function TripsListEasy() {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const trips = tripsData
    .filter(
      (trip) =>
        trip.name.toLowerCase().includes(query.toLowerCase()) &&
        trip.difficulty.includes("easy")
    )
    .map((trip) => <TripItem trip={trip} />);

  const setEasy = () => {
    setDifficulty("easy");
  };
  const setModerate = () => {
    setDifficulty("moderate");
  };
  const setHard = () => {
    setDifficulty("hard");
  };

  if (difficulty === "easy") return <Navigate to="/trips/easy" />;
  if (difficulty === "moderate") return <Navigate to="/trips/moderate" />;
  if (difficulty === "hard") return <Navigate to="/trips/hard" />;

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Explore Trips
        </h2>
        <br />
        <SearchBar setQuery={setQuery} />
        <center>
          <button onClick={setEasy} className="btn btn-primary btn-xl">
            Easy
          </button>
          <button onClick={setModerate} className="btn btn-primary btn-xl">
            Moderate
          </button>
          <button onClick={setHard} className="btn btn-primary btn-xl">
            Hard
          </button>
        </center>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">{trips}</div>
      </div>
    </section>
  );
}

export default TripsListEasy;
