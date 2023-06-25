// import logo from './logo.svg';
import './../App.css';
import Home from './Home';
import NavBar from './NavBar';
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>




      </Switch>
    </div>
  );
}

export default App;
