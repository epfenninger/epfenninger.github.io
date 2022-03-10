import "./App.css";
import FormApp from "./components/FormApp";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <FormApp />
        </Router>
      </header>
    </div>
  );
}

export default App;
