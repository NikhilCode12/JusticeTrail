import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameQuiz from './components/GameZone/Games/GameQuiz';
import GamesScreen from './components/GameZone/GamesScreen/GamesScreen';
import CertificateGenerator from "./components/CertificateGenerator/CertificateGenerator";
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<GameQuiz />} />
        <Route path="/games" element={<GamesScreen />}/>
        <Route path='/courses' element={<Courses />} />
        <Route path='/certificate' element={<CertificateGenerator />} />
      </Routes>
    </Router>
  );
};

export default App;
