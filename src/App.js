import "./App.css";
import Contact from "./components/BasicContact.jsx";
import NavBar from "./components/navbar";
import HiddenFields from "./components/HiddenFields.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/HiddenFields" element={<HiddenFields />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
