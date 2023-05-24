import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Actors, Movies, MoviesInfo, Profile, Navbar} from './index';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/*" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MoviesInfo />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
    </>
   
  );
} 

export default App;
