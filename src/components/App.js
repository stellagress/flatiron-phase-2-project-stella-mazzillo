import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import ParticipatingCountries from './ParticipatingCountries';
import Games from './Games';

function App() {
  return (
    <div className="App">
      {/* Render NavBar component */}
      <NavBar />

      <Switch>
        {/* Define a route for the Home page */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* Define a route for Participating Countries page */}
        <Route exact path="/participating-countries">
          <ParticipatingCountries />
        </Route>

        {/* Define a route for Games page */}
        <Route exact path="/games">
          <Games />
        </Route>
      </Switch>
    </div>
  );
}

export default App;







// import './../App.css';
// import Home from './Home';
// import NavBar from './NavBar';
// import { Route, Switch } from "react-router-dom"
// import ParticipatingCountries from './ParticipatingCountries';
// import Games from './Games';


// /*The App component is the main component that renders other components based on the current route. 
// It uses the Switch and Route components from react-router-dom to define the routes and render the corresponding components.*/
// function App() {
//   return (
//     <div className="App">

//       {/* render NavBar component */}
//       <NavBar />

//       <Switch>

//         // define a route for Home page
//         <Route exact path="/">
//           <Home />
//         </Route>

//         // define a route for Participating Countries page 
//         <Route exact path="/participating-countries">
//           <ParticipatingCountries />
//         </Route>

//         // define a route for Games page
//         <Route exact path="/games">
//           <Games />
//         </Route>



//       </Switch>
//     </div>
//   );
// }

// export default App;
