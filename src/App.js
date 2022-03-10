import "./App.css";
import Contact from "./components/BasicContact.jsx";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Contact />
        </Router>
      </header>
    </div>
  );
}

export default App;
