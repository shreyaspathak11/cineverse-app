import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Actors, Movies, MovieInfo, Profile, Navbar} from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInfo />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>


   
  );
}

export default App;
