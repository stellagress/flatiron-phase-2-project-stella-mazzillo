

// import logo from './logo.svg';
import './../App.css';
import Home from './Home';
import NavBar from './NavBar';
import { Route, Switch } from "react-router-dom"
import ParticipatingCountries from './ParticipatingCountries';
import Games from './Games';



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


        <Route exact path="/games">
          <Games />
        </Route>



      </Switch>
    </div>
  );
}

export default App;
