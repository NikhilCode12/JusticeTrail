import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameQuiz from './components/GameZone/Games/GameQuiz';
import GamesScreen from './components/GameZone/GamesScreen/GamesScreen';
import CertificateGenerator from "./components/CertificateGenerator/CertificateGenerator";
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/play' element={<GameQuiz />} />
        <Route path="/games" element={<GamesScreen />}/>
        {/* Home Screen here! */}
        {/* <Route path='' element={<Home />}/> */}
        {/* Create routes afer adding component */}
        <Route path='/certificate' element={<CertificateGenerator />}/>
      </Routes>
    </Router>
  );
};

export default App;
