import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./style.css";

import Home from "../../pages/Home";
import Error404 from "../../pages/Error404";
import PlayerDetails from "../../pages/PlayerDetails";
import ErrorFallback from "../ErrorFallback/ErrorFallback";

function App() {
  return (
    <div data-testid="app" className="app">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/player/:id" element={<PlayerDetails />} />
          <Route exact path="/*" element={<Error404 />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
