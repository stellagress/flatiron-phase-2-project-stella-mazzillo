import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

function Games() {
  // State variables:
  const [matches, setMatches] = useState([]);
  const [showMatches, setShowMatches] = useState(false);
  const [showPlayoffs, setShowPlayoffs] = useState(false);
  const [formData, setFormData] = useState({
    fixture: "",
    timeEST: "",
    date: ""
  });

  // Fetch data function
  const fetchData = () => {
    fetch("http://localhost:3000/rounds")
      .then((response) => response.json())
      .then((data) => {
        const allMatches = data.flatMap((round) => round);
        setMatches(allMatches);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Event handlers:

  const handleRoundChange = (round) => {
    setShowMatches((prevShowMatches) => !prevShowMatches);
    const selectedRound = matches.find((r) => r.name === `Round ${round}`);
    if (selectedRound) {
      setMatches(selectedRound.matches);
    }
  };

  const handleAddPlayoff = () => {
    setShowPlayoffs((prevShowPlayoffs) => !prevShowPlayoffs);
    if (!showPlayoffs) {
      setFormData({
        fixture: "",
        timeEST: "",
        date: ""
      });
    }
  };

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMatch = {
      fixture: formData.fixture,
      timeEST: formData.timeEST,
      date: formData.date
    };

    fetch("http://localhost:3000/rounds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMatch)
    })
      .then((response) => response.json())
      .then((data) => {
        setMatches((prevMatches) => [...prevMatches, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setFormData({
      fixture: "",
      timeEST: "",
      date: ""
    });
  };

  const handleDeleteGame = (id) => {
    fetch(`http://localhost:3000/rounds/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        // Refetch data after deletion
        fetchData();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Renders round matches:
  const RoundMatches = () => {
    const { round } = useParams();

    return (
      <div className="matches-wrapper">
        {round && (
          <div>
            {showMatches &&
              matches.map((match, index) => (
                <div key={match.id} className="match-item">
                  <p>{match.fixture}</p>
                  <p>{match.timeEST}</p>
                  <p>{match.date}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  };

  // Renders Games.js
  return (
    <Router>
      <div className="games-page">
        <img
          src="https://canadasoccer.com/wp-content/uploads/2023/02/20230222_FIFAWWC_nations.jpg"
          alt="A-H Groups"
          style={{ width: "1000px", height: "auto" }}
        />

        {/* Buttons and form */}
        <div>
          <div>
            <button className="games-list" onClick={() => { handleRoundChange(1); fetchData(); }}>
              <Link to="/games/rounds">Games</Link>
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h5 style={{ marginRight: "10px" }}>Done with the previous phase?</h5>
            <button onClick={handleDeleteGame}>Clear Games</button>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h5 style={{ marginRight: "10px" }}>Please, add playoffs games:</h5>
            <button onClick={handleAddPlayoff}>
              {showPlayoffs ? "Hide Form" : "Add Playoff"}
            </button>
          </div>
          <div className="grid-label">
            <h4>Fixture:</h4>
            <h4>Time(EST):</h4>
            <h4>Date:</h4>
          </div>
        </div>

        {/* Playoff form */}
        {showPlayoffs && (
          <div>
            <h2>Add Playoff</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Fixture:
                <input
                  type="text"
                  name="fixture"
                  value={formData.fixture}
                  onChange={handleFormChange}
                />
              </label>
              <label>
                Time (EST):
                <input
                  type="text"
                  name="timeEST"
                  value={formData.timeEST}
                  onChange={handleFormChange}
                />
              </label>
              <label>
                Date:
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleFormChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}

        {/* Switch and routes for round matches */}
        <Switch>
          <Route exact path="/games"></Route>
          <Route path="/games/:round" component={RoundMatches} />
        </Switch>
      </div>
    </Router>
  );
}

export default Games;









// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

// function Games() {
//   //State variables:
//   const [matches, setMatches] = useState([]);
//   const [showMatches, setShowMatches] = useState(false);
//   const [showPlayoffs, setShowPlayoffs] = useState(false);
//   const [formData, setFormData] = useState({
//     fixture: "",
//     timeEST: "",
//     date: ""
//   });

//   // fetch data 
//   useEffect(() => {
//     fetch("http://localhost:3000/rounds")
//       .then((response) => response.json())
//       .then((data) => {
//         const allMatches = data.flatMap((round) => round);
//         setMatches(allMatches);
//       });
//   }, []);


//   // EVENT HANDLERS:

//   const handleRoundChange = (round) => {
//     setShowMatches((prevShowMatches) => !prevShowMatches);
//     const selectedRound = matches.find((r) => r.name === `Round ${round}`);
//     if (selectedRound) {
//       setMatches(selectedRound.matches);
//     }
//   };

//   const handleAddPlayoff = () => {
//     setShowPlayoffs((prevShowPlayoffs) => !prevShowPlayoffs);
//     if (!showPlayoffs) {
//       setFormData({
//         fixture: "",
//         timeEST: "",
//         date: ""
//       });
//     }
//   };

//   const handleFormChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newMatch = {
//       fixture: formData.fixture,
//       timeEST: formData.timeEST,
//       date: formData.date
//     };


//     fetch("http://localhost:3000/rounds", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newMatch)
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setMatches((prevMatches) => [...prevMatches, data]);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });

//     setFormData({
//       fixture: "",
//       timeEST: "",
//       date: ""
//     });
//   };

//   const handleDeleteGame = (id) => {
//     fetch(`http://localhost:3000/rounds/${id}`, {
//       method: "DELETE"
//     })
//       .then(() => {
//         setMatches([]);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };


//   // Renders round matches: 
//   const RoundMatches = () => {
//     const { round } = useParams();

//     return (
//       <div className="matches-wrapper">
//         {round && (
//           <div>
//             {showMatches &&
//               matches.map((match, index) => (
//                 <div key={match.id} className="match-item">
//                   <p>{match.fixture}</p>
//                   <p>{match.timeEST}</p>
//                   <p>{match.date}</p>
//                 </div>
//               ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   //Renders Games.js 
//   return (
//     <Router>
//       <div className="games-page">
//         <img
//           src="https://canadasoccer.com/wp-content/uploads/2023/02/20230222_FIFAWWC_nations.jpg"
//           alt="A-H Groups"
//           style={{ width: "1000px", height: "auto" }}
//         />

//         {/* Buttons and form */}
//           <div>
//           <div>
//             <button className="games-list" onClick={() => handleRoundChange(1)}>
//               <Link to="/games/rounds">Games</Link>
//             </button>
//           </div>
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <h5 style={{ marginRight: "10px" }}>Done with previous phase?</h5>
//             <button onClick={handleDeleteAll}>Clear Games</button>
//           </div>
          
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}> 
//           <h5 style={{ marginRight: "10px" }}>Please, add playoffs games:</h5>
//             <button onClick={handleAddPlayoff}>
//               {showPlayoffs ? "Hide Form" : "Add Playoff"}
//             </button>
//           </div>
//           <div className="grid-label">
//             <h4>Fixture:</h4>  
//             <h4>Time(EST):</h4>
//             <h4>Date:</h4>
//           </div>
//         </div>

//       {/* Playoff form */}
//         {showPlayoffs && (
//           <div>
//             <h2>Add Playoff</h2>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 Fixture:
//                 <input
//                   type="text"
//                   name="fixture"
//                   value={formData.fixture}
//                   onChange={handleFormChange}
//                 />
//               </label>
//               <label>
//                 Time (EST):
//                 <input
//                   type="text"
//                   name="timeEST"
//                   value={formData.timeEST}
//                   onChange={handleFormChange}
//                 />
//               </label>
//               <label>
//                 Date:
//                 <input
//                   type="text"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleFormChange}
//                 />
//               </label>
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         )}

//       {/* Switch and routes for round matches */}
//         <Switch>
//           <Route exact path="/games"></Route>
//           <Route path="/games/:round" component={RoundMatches} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default Games;

