import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Header from "./components/Header";
import Play from "./components/Play";
import Footer from "./components/Footer";

function App() {
  const [mychoice, setMychoice] = useState('')
  const [score, setScore] = useState(0)
  return (
    <>
    <Router>
      <Header score={score}/>
      <Routes>
        <Route path="/" element={<Play setMychoice={setMychoice}/>} />
        <Route path="/game" element={<Game mychoice={mychoice} score={score} setScore={setScore}/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
