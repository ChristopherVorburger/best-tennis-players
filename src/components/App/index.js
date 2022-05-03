import { Route, Routes } from "react-router-dom";
import "./style.css";

import Home from "../../pages/Home";
import PlayerDetails from "../../pages/PlayerDetails";

function App() {
  return (
    <div data-testid="app" className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/player/:id" element={<PlayerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
