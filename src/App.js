import "./App.css";
import Contact from "./components/BasicContact.jsx";
import NavBar from "./components/navbar";
import BlockedIframe from "./components/BlockedIframe";
import PickList from "./components/PickList";
import NoID from "./components/NoID";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/PickList" element={<PickList />} />
            <Route path="/BlockedIframe" element={<BlockedIframe />} />
            <Route path="/NoID" element={<NoID />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
