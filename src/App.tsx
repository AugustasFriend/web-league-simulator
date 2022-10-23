import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./use-cases/home/HomeScreen";
import ScheduleScreen from "./use-cases/schedule/ScheduleScreen";
import StandingsScreen from "./use-cases/standings/StandingsScreen";
import { routes } from "./routes/AppRoutes";
import { Navbar } from "./navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<HomeScreen />} path={routes.home()} />
          <Route element={<ScheduleScreen />} path={routes.schedule()} />
          <Route element={<StandingsScreen />} path={routes.standings()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
