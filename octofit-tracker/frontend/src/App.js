import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import TRex from './components/dinos/TRex';
import Stegosaurus from './components/dinos/Stegosaurus';
import Brontosaurus from './components/dinos/Brontosaurus';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg octofit-navbar mb-4">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="OctoFit Logo" />
            OctoFit Tracker
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[['Activities', '/activities'], ['Leaderboard', '/leaderboard'], ['Teams', '/teams'], ['Users', '/users'], ['Workouts', '/workouts']].map(([label, path]) => (
                <li className="nav-item" key={path}>
                  <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to={path}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="octofit-welcome">
              <div className="dino-scene">
                <TRex width={130} height={130} className="dino-trex" />
                <div className="welcome-text-block">
                  <h1>Welcome to OctoFit Tracker</h1>
                  <p>Go extinct with your old habits. Track fitness, compete on the leaderboard, and join a team — dinosaur style!</p>
                  <div className="d-flex flex-wrap gap-2 justify-content-center mt-4">
                    <NavLink className="btn btn-dino-green" to="/activities">🦕 Activities</NavLink>
                    <NavLink className="btn btn-dino-orange" to="/leaderboard">🏆 Leaderboard</NavLink>
                    <NavLink className="btn btn-dino-blue" to="/teams">🦖 Teams</NavLink>
                    <NavLink className="btn btn-dino-yellow" to="/users">👤 Users</NavLink>
                    <NavLink className="btn btn-dino-red" to="/workouts">💪 Workouts</NavLink>
                  </div>
                </div>
                <Brontosaurus width={160} height={140} className="dino-bronto" />
              </div>
              <div className="dino-footer-scene">
                <Stegosaurus width={160} height={110} className="dino-stego" />
                <div className="dino-ground-text">
                  <span className="dino-tag">🌿 Jurassic Fitness Zone 🌿</span>
                </div>
                <Stegosaurus width={120} height={85} className="dino-stego dino-stego-flip" />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
