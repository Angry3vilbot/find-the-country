import { BrowserRouter, Routes, Route, } from "react-router-dom"
import App from "../App"
import React, { useState } from 'react';
import Authentication from "../Authentication";
import Leaderboard from "./Leaderboard";

const RouteSwitch = () => {
  //time for the timer
    const [totalTime, setTotalTime] = useState(0)
    return (
          <BrowserRouter basename="/find-the-country">
            <Routes>
              <Route path="/" element={<Authentication></Authentication>}>{}</Route>
              <Route path="/game" element={<App totalTime={totalTime} setTotalTime={setTotalTime}></App>}></Route>
              <Route path="/leaderboard" element={<Leaderboard></Leaderboard>}></Route>
            </Routes>
          </BrowserRouter>
        )
}

export default RouteSwitch