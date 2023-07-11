import react from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Header from "./components/Header.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />   
      <Login />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')) 
root.render(<App />);

export default App;
