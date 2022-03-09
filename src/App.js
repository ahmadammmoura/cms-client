import "./App.css";
import CustomerPage from "./pages/CustomerPage";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/admin">
            <Dashboard />
          </Route>

          <Route exact path="/customer">
            <CustomerPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
