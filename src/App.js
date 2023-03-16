import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route>
        <Login />
      </Route>
    </div>
  );
}

export default App;
