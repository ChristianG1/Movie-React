import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Details } from "./pages/Details";
import LandingPage from "./pages/LandingPage";
import { Error } from "./pages/404";

function App() {
  return (
    <Router>

      <main>
        <Switch>
          <Route exact path="/movies/:movieId"><Details /></Route>
          <Route exact path="/"><LandingPage /></Route>
          <Route path="/"><Error /></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
