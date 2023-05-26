import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Actors, Movies, MoviesInfo, Profile, Navbar } from './index';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ display: 'flex' }}> {/* Wrap Sidebar and Movies within a parent container */}
        <Sidebar />
        <Routes>
          <Route exact path="/*" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MoviesInfo />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
