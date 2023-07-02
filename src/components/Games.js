import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

function Games() {
  const [matches, setMatches] = useState([]);
  const [showMatches, setShowMatches] = useState(false);
  const [showPlayoffs, setShowPlayoffs] = useState(false);
  const [formData, setFormData] = useState({
    fixture: "",
    timeEST: "",
    date: ""
  });

  useEffect(() => {
    fetch("http://localhost:3000/rounds")
      .then((response) => response.json())
      .then((data) => {
        const allMatches = data.flatMap((round) => round);
        setMatches(allMatches);
      });
  }, []);

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

  const handleDeleteAll = () => {
    fetch("http://localhost:3000/rounds", {
      method: "DELETE"
    })
      .then(() => {
        setMatches([]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const RoundMatches = () => {
    const { round } = useParams();

    return (
      <div>
        {round && (
          <div>
            {showMatches &&
              matches.map((match, index) => (
                <div key={index}>
                  <p>{match.fixture}</p>
                  <p>Time (EST): {match.timeEST}</p>
                  <p>Date: {match.date}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <Router>
      <div>
        <img
          src="https://canadasoccer.com/wp-content/uploads/2023/02/20230222_FIFAWWC_nations.jpg"
          alt="A-H Groups"
          style={{ width: "1000px", height: "auto" }}
        />
          <div>
          <div>
            <button onClick={() => handleRoundChange(1)}>
              <Link to="/group-stage/rounds">Games</Link>
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ marginRight: "10px" }}>Done with previous phase?</p>
            <button onClick={handleDeleteAll}>Clear Games</button>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}> 
          <p style={{ marginRight: "10px" }}>Please, add playoffs games:</p>
            <button onClick={handleAddPlayoff}>
              {showPlayoffs ? "Hide Form" : "Add Playoff"}
            </button>
          </div>
        </div>


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

        <Switch>
          <Route exact path="/group-stage"></Route>
          <Route path="/group-stage/:round" component={RoundMatches} />
        </Switch>
      </div>
    </Router>
  );
}

export default Games;







// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

// function GroupStage() {
//   const [matches, setMatches] = useState([]);
//   const [showMatches, setShowMatches] = useState(false);
//   const [showPlayoffs, setShowPlayoffs] = useState(false);
//   const [formData, setFormData] = useState({
//     fixture: "",
//     timeEST: "",
//     date: ""
//   });

//   useEffect(() => {
//     fetch("http://localhost:3000/rounds")
//       .then((response) => response.json())
//       .then((data) => {
//         const allMatches = data.flatMap((round) => round);
//         setMatches(allMatches);
//       });
//   }, []);

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

//   const RoundMatches = () => {
//     const { round } = useParams();

//     return (
//       <div>
//         {round && (
//           <div>
//             <h2>Matches Group Stage</h2>
//             {showMatches &&
//               matches.map((match, index) => (
//                 <div key={index}>
//                   <p>{match.fixture}</p>
//                   <p>Time (EST): {match.timeEST}</p>
//                   <p>Date: {match.date}</p>
//                 </div>
//               ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <Router>
//       <div>
//         <img
//           src="https://canadasoccer.com/wp-content/uploads/2023/02/20230222_FIFAWWC_nations.jpg"
//           alt="A-H Groups"
//           style={{ width: "1000px", height: "auto" }}
//         />
//         <div>
//           <button onClick={() => handleRoundChange(1)}>
//             <Link to="/group-stage/rounds">Games</Link>
//           </button>
//           <button onClick={handleAddPlayoff}>
//             {showPlayoffs ? "Hide Form" : "Add Playoff"}
//           </button>
//         </div>

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

//         <Switch>
//           <Route exact path="/group-stage"></Route>
//           <Route path="/group-stage/:round" component={RoundMatches} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default GroupStage;







// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

// function GroupStage() {
//   const [matches, setMatches] = useState([]);
//   const [showMatches, setShowMatches] = useState(false);

//   useEffect(() => {
//     fetch('http://localhost:3000/rounds')
//       .then((response) => response.json())
//       .then((data) => {
//         const allMatches = data.flatMap((round) => round);
//         setMatches(allMatches);
//       });
//   }, []);

//   const handleRoundChange = (round) => {
//     setShowMatches((prevShowMatches) => !prevShowMatches);
//     const selectedRound = matches.find((r) => r.name === `Round ${round}`);
//     if (selectedRound) {
//       setMatches(selectedRound.matches);
//     }
//   };

//   const RoundMatches = () => {
//     const { round } = useParams();

//     return (
//       <div>
//         {round && (
//           <div>
//             <h2>Matches Group Stage</h2>
//             {showMatches &&
//               matches.map((match, index) => (
//                 <div key={index}>
//                   <p>{match.fixture}</p>
//                   <p>Time (EST): {match.timeEST}</p>
//                   <p>Date: {match.date}</p>
//                 </div>
//               ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <Router>
//       <div>
//         <img
//           src="https://canadasoccer.com/wp-content/uploads/2023/02/20230222_FIFAWWC_nations.jpg"
//           alt="A-H Groups"
//           style={{ width: "1000px", height: "auto" }}
//         />
//         <div>
//           <button onClick={() => handleRoundChange(1)}>
//             <Link to="/group-stage/rounds">Rounds</Link>
//           </button>
//         </div>

//         <Switch>
//           <Route exact path="/group-stage"></Route>
//           <Route path="/group-stage/:round" component={RoundMatches} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default GroupStage;









// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

// function GroupStage() {
//   const [matches, setMatches] = useState([]);
//   const [showMatches, setShowMatches] = useState(false);

//   useEffect(() => {
//     fetch('http://localhost:3000/rounds')
//       .then((response) => response.json())
//       .then((data) => {
//         const allMatches = data.flatMap((round) => round);
//         setMatches(allMatches);
//       });
//   }, []);

//   const handleRoundChange = (round) => {
//     setShowMatches((prevShowMatches) => !prevShowMatches);
//     const selectedRound = matches.find((r) => r.name === `Round ${round}`);
//     if (selectedRound) {
//       setMatches(selectedRound.matches);
//     }
//   };

//   const RoundMatches = () => {
//     const { round } = useParams();

//     return (
//       <div>
//         {round && (
//           <div>
//             <h2>Matches Group Stage</h2>
//             {showMatches &&
//               matches.map((match, index) => (
//                 <div key={index}>
//                   <p>{match.fixture}</p>
//                   <p>Time (EST): {match.timeEST}</p>
//                   <p>Date: {match.date}</p>
//                 </div>
//               ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <Router>
//       <div>
//         <img
//           src="https://canadasoccer.com/wp-content/uploads/2023/02/20230222_FIFAWWC_nations.jpg"
//           alt="A-H Groups"
//           style={{ width: "1000px", height: "auto" }}
//         />
//         <div>
//           <button onClick={() => handleRoundChange(1)}>
//             <Link to="/group-stage/rounds">Rounds</Link>
//           </button>
//         </div>

//         <Switch>
//           <Route exact path="/group-stage"></Route>
//           <Route path="/group-stage/:round" component={RoundMatches} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default GroupStage;









// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

// function GroupStage() {
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/rounds')
//       .then((response) => response.json())
//       .then((data) => {
//         const allMatches = data.flatMap((round) => round.matches);
//         setMatches(allMatches);
//       });
//   }, []);

//   const handleRoundChange = round => {
//     const selectedRound = matches.find(r => r.name === `Round ${round}`);
//     if (selectedRound) {
//       setMatches(selectedRound.matches);
//     }
//   };

//   const RoundMatches = () => {
//     const { round } = useParams();

//     return (
//       <div>
//         {round && (
//           <div>
//             <h2>Round {round} Matches</h2>
//             {matches.map((match, index) => (
//               <div key={index}>
//                 <p>{match.fixture}</p>
//                 <p>Time (EST): {match.timeEST}</p>
//                 <p>Date: {match.date}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <Router>
//       <div>
//         <img
//           src="https://canadasoccer.com/wp-content/uploads/2023/02/20230222_FIFAWWC_nations.jpg"
//           alt="A-H Groups"
//           style={{ width: "1000px", height: "auto" }}
//         />
//         <div>
//           <button onClick={() => handleRoundChange(1)}>
//             <Link to="/group-stage/rounds">Rounds</Link>
//           </button>
//         </div>

//         <Switch>
//           <Route exact path="/group-stage">
//           </Route>
//           <Route path="/group-stage/:round" component={RoundMatches} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default GroupStage;









// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

// function GroupStage() {
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/rounds')
//       .then((response) => response.json())
//       .then((data) => {
//         const allMatches = data.flatMap((round) => round.matchesRound1 || round.matchesRound2 || round.matchesRound3);
//         setMatches(allMatches);
//       });
//   }, []);

//   const handleRoundChange = round => {
//     const selectedRound = matches.find(r => r.name === `Round ${round}`);
//     if (selectedRound) {
//       setMatches(selectedRound.matches);
//     }
//   };

//   const RoundMatches = () => {
//     const { round } = useParams();

//     return (
//       <div>
//         {round && (
//           <div>
//             <h2>Round {round} Matches</h2>
//             {matches.map((match, index) => (
//               <div key={index}>
//                 <p>{match.fixture}</p>
//                 <p>Time (EST): {match.timeEST}</p>
//                 <p>Date: {match.date}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <Router>
//       <div>
//         <img
//           src="https://canadasoccer.com/wp-content/uploads/2023/02/20230222_FIFAWWC_nations.jpg"
//           alt="A-H Groups"
//           style={{ width: "1000px", height: "auto" }}
//         />
//         <div>
//           <button onClick={() => handleRoundChange(1)}>
//             <Link to="/group-stage/1">Round 1</Link>
//           </button>
//           <button onClick={() => handleRoundChange(2)}>
//             <Link to="/group-stage/2">Round 2</Link>
//           </button>
//           <button onClick={() => handleRoundChange(3)}>
//             <Link to="/group-stage/3">Round 3</Link>
//           </button>
//         </div>

//         <Switch>
//           <Route exact path="/group-stage">
//             <h2>Please select a round</h2>
//           </Route>
//           <Route path="/group-stage/:round" component={RoundMatches} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default GroupStage;













// import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
// import data from "../data.json";

// function GroupStage() {
//   const [currentRound, setCurrentRound] = useState(1);
//   const { countries, "round 1": round1, "round 2": round2, "round 3": round3 } = data;

//   const handleRoundChange = round => {
//     setCurrentRound(round);
//   };

//   const RoundMatches = () => {
//     const { round } = useParams();

//     return (
//       <div>
//         {round === "1" && (
//           <div>
//             <h2>Round 1 Matches</h2>
//             {round1.map((match, index) => (
//               <div key={index}>
//                 <p>{match.fixture}</p>
//                 <p>Time (EST): {match.timeEST}</p>
//                 <p>Date: {match.date}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {round === "2" && (
//           <div>
//             <h2>Round 2 Matches</h2>
//             {round2.map((match, index) => (
//               <div key={index}>
//                 <p>{match.fixture}</p>
//                 <p>Time (EST): {match.timeEST}</p>
//                 <p>Date: {match.date}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {round === "3" && (
//           <div>
//             <h2>Round 3 Matches</h2>
//             {round3.map((match, index) => (
//               <div key={index}>
//                 <p>{match.fixture}</p>
//                 <p>Time (EST): {match.timeEST}</p>
//                 <p>Date: {match.date}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <Router>
//       <div>
//         <img
//           src="https://canadasoccer.com/wp-content/uploads/2023/02/20230222_FIFAWWC_nations.jpg"
//           alt="A-H Groups"
//           style={{ width: "1000px", height: "auto" }}
//         />
//         <div>
//           <button onClick={() => handleRoundChange(1)}>
//             <Link to="/group-stage/1">Round 1</Link>
//           </button>
//           <button onClick={() => handleRoundChange(2)}>
//             <Link to="/group-stage/2">Round 2</Link>
//           </button>
//           <button onClick={() => handleRoundChange(3)}>
//             <Link to="/group-stage/3">Round 3</Link>
//           </button>
//         </div>

//         <Switch>
//           <Route exact path="/group-stage">
//             <h2>Please select a round</h2>
//           </Route>
//           <Route path="/group-stage/:round" component={RoundMatches} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default GroupStage;
















// import React, { useState } from "react";
// import data from '../data.json';



// function GroupStage() {

//     const [currentRound, setCurrentRound] = useState(1)

//     const handleRoundChange = round => {
//         setCurrentRound(round)
//     }

//     const { countries, 'round 1': round1, 'round 2': round2, 'round 3': round3 } = data;




//     return (
//         <div>
//             <img src="https://canadasoccer.com/wp-content/uploads/2023/02/20230222_FIFAWWC_nations.jpg" 
//             alt="A-H Groups" 
//             style={{ width: "1000px", height: "auto" }}
//             />
//             <div>
//                 <button onClick={() => handleRoundChange(1)}>Round 1</button>
//                 <button onClick={() => handleRoundChange(2)}>Round 2</button>
//                 <button onClick={() => handleRoundChange(3)}>Round 3</button>
//             </div>

//             {currentRound === 1 && (
//         <div>
//           <h2>Round 1 Matches</h2>
//           {round1.map((match, index) => (
//             <div key={index}>
//               <p>{match.fixture}</p>
//               <p>Time (EST): {match.timeEST}</p>
//               <p>Date: {match.date}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {currentRound === 2 && (
//         <div>
//           <h2>Round 2 Matches</h2>
//           {round2.map((match, index) => (
//             <div key={index}>
//               <p>{match.fixture}</p>
//               <p>Time (EST): {match.timeEST}</p>
//               <p>Date: {match.date}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {currentRound === 3 && (
//         <div>
//           <h2>Round 3 Matches</h2>
//           {round3.map((match, index) => (
//             <div key={index}>
//               <p>{match.fixture}</p>
//               <p>Time (EST): {match.timeEST}</p>
//               <p>Date: {match.date}</p>
//             </div>
//           ))}
//         </div>
//       )}

//         </div>
//     )
// }


// export default GroupStage; 









// import React, { useState } from "react";
// import data from '../data.json';

// function GroupStage() {
//   const [currentRound, setCurrentRound] = useState(1);

//   const handleRoundChange = round => {
//     setCurrentRound(round);
//     const url = `http://localhost:3000/group-stage/${round}`;
//     window.history.pushState({ path: url }, "", url);
//   };

//   const { countries, 'round 1': round1, 'round 2': round2, 'round 3': round3 } = data;

//   return (
//     <div>
//       <img
//         src="https://canadasoccer.com/wp-content/uploads/2023/02/20230222_FIFAWWC_nations.jpg"
//         alt="A-H Groups"
//         style={{ width: "1000px", height: "auto" }}
//       />
//       <div>
//         <button onClick={() => handleRoundChange(1)}>Round 1</button>
//         <button onClick={() => handleRoundChange(2)}>Round 2</button>
//         <button onClick={() => handleRoundChange(3)}>Round 3</button>
//       </div>

//       {currentRound === 1 && (
//         <div>
//           <h2>Round 1 Matches</h2>
//           {round1.map((match, index) => (
            // <div key={index}>
            //   <p>{match.fixture}</p>
            //   <p>Time (EST): {match.timeEST}</p>
            //   <p>Date: {match.date}</p>
            // </div>
//           ))}
//         </div>
//       )}

//       {currentRound === 2 && (
//         <div>
//           <h2>Round 2 Matches</h2>
//           {round2.map((match, index) => (
//             <div key={index}>
//               <p>{match.fixture}</p>
//               <p>Time (EST): {match.timeEST}</p>
//               <p>Date: {match.date}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {currentRound === 3 && (
//         <div>
//           <h2>Round 3 Matches</h2>
//           {round3.map((match, index) => (
//             <div key={index}>
//               <p>{match.fixture}</p>
//               <p>Time (EST): {match.timeEST}</p>
//               <p>Date: {match.date}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default GroupStage;