import { Route, Routes } from "react-router-dom";
import "./style.css";

import Home from "../../pages/Home";
import PlayerDetails from "../../pages/PlayerDetails";
import ErrorFallback from "../ErrorFallback/ErrorFallback";

import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <div data-testid="app" className="app">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/player/:id" element={<PlayerDetails />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
