
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import data from "../data.json";

function GroupStage() {
  const [currentRound, setCurrentRound] = useState(1);
  const { countries, "round 1": round1, "round 2": round2, "round 3": round3 } = data;

  const handleRoundChange = round => {
    setCurrentRound(round);
  };

  const RoundMatches = () => {
    const { round } = useParams();

    return (
      <div>
        {round === "1" && (
          <div>
            <h2>Round 1 Matches</h2>
            {round1.map((match, index) => (
              <div key={index}>
                <p>{match.fixture}</p>
                <p>Time (EST): {match.timeEST}</p>
                <p>Date: {match.date}</p>
              </div>
            ))}
          </div>
        )}

        {round === "2" && (
          <div>
            <h2>Round 2 Matches</h2>
            {round2.map((match, index) => (
              <div key={index}>
                <p>{match.fixture}</p>
                <p>Time (EST): {match.timeEST}</p>
                <p>Date: {match.date}</p>
              </div>
            ))}
          </div>
        )}

        {round === "3" && (
          <div>
            <h2>Round 3 Matches</h2>
            {round3.map((match, index) => (
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
          <button onClick={() => handleRoundChange(1)}>
            <Link to="/group-stage/1">Round 1</Link>
          </button>
          <button onClick={() => handleRoundChange(2)}>
            <Link to="/group-stage/2">Round 2</Link>
          </button>
          <button onClick={() => handleRoundChange(3)}>
            <Link to="/group-stage/3">Round 3</Link>
          </button>
        </div>

        <Switch>
          <Route exact path="/group-stage">
            <h2>Please select a round</h2>
          </Route>
          <Route path="/group-stage/:round" component={RoundMatches} />
        </Switch>
      </div>
    </Router>
  );
}

export default GroupStage;




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