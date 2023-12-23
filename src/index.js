// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './components/App';
// import reportWebVitals from './reportWebVitals';

// //import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <App />
//   </Router>
// );

// reportWebVitals();

