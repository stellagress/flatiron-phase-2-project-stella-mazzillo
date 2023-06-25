// import logo from './logo.svg';
import './../App.css';
import Home from './Home';
import NavBar from './NavBar';
import { Route, Switch } from "react-router-dom"
import ParticipatingCountries from './ParticipatingCountries';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>


        <Route exact path="/participating-countries">
          <ParticipatingCountries />
        </Route>




      </Switch>
    </div>
  );
}

export default App;
