import React, { useState, useEffect } from 'react';

function Playoffs() {
  const [matches, setMatches] = useState([]);
  const [showMatches, setShowMatches] = useState(false);
  const [formData, setFormData] = useState({
    fixture: '',
    timeEST: '',
    date: ''
  });

  useEffect(() => {
    fetch('http://localhost:3000/rounds')
      .then((response) => response.json())
      .then((data) => {
        const playoffMatches = data.filter((round) => isPlayoffRound(round.round));
        setMatches(playoffMatches);
      });
  }, []);

  const isPlayoffRound = (round) => {
    const playoffRounds = ['Playoff Round of 16', 'Playoff Quarterfinals', 'Playoff Semifinals', 'Playoff Final'];
    return playoffRounds.includes(round);
  };

  const handleRoundChange = (round) => {
    setShowMatches((prevShowMatches) => !prevShowMatches);
    const selectedRound = matches.find((r) => r.round === round);
    if (selectedRound) {
      setMatches([selectedRound]);
    } else {
      setMatches([]);
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

    fetch('http://localhost:3000/rounds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // Update the matches state with the new data
        setMatches((prevMatches) => [...prevMatches, data]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Playoff Matches:</h2>
      <div>
        <button onClick={() => handleRoundChange('Playoff Round of 16')}>Round of 16</button>
        <button onClick={() => handleRoundChange('Playoff Quarterfinals')}>Quarterfinals</button>
        <button onClick={() => handleRoundChange('Playoff Semifinals')}>Semifinals</button>
        <button onClick={() => handleRoundChange('Playoff Final')}>Final</button>
      </div>
      {showMatches && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Fixture:
              <input type="text" name="fixture" value={formData.fixture} onChange={handleFormChange} />
            </label>
            <label>
              Time (EST):
              <input type="text" name="timeEST" value={formData.timeEST} onChange={handleFormChange} />
            </label>
            <label>
              Date:
              <input type="text" name="date" value={formData.date} onChange={handleFormChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
          <ul>
            {matches.map((match, index) => (
              <li key={index}>
                Fixture: {match.fixture}, Time (EST): {match.timeEST}, Date: {match.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Playoffs;






// import React, { useState, useEffect } from 'react';

// function Playoffs() {
//   const [matches, setMatches] = useState([]);
//   const [showMatches, setShowMatches] = useState(false);
//   const [formData, setFormData] = useState({
//     fixture: '',
//     timeEST: '',
//     date: ''
//   });

//   useEffect(() => {
//     fetch('http://localhost:3000/rounds')
//       .then((response) => response.json())
//       .then((data) => {
//         const playoffMatches = data.filter((round) => isPlayoffRound(round.round));
//         setMatches(playoffMatches);
//       });
//   }, []);

//   const isPlayoffRound = (round) => {
//     const playoffRounds = ['Playoff Round of 16', 'Playoff Quarterfinals', 'Playoff Semifinals', 'Playoff Final'];
//     return playoffRounds.includes(round);
//   };

//   const handleRoundChange = (round) => {
//     setShowMatches((prevShowMatches) => !prevShowMatches);
//     const selectedRound = matches.find((r) => r.round === round);
//     if (selectedRound) {
//       setMatches([selectedRound]);
//     } else {
//       setMatches([]);
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

//     fetch('http://localhost:3000/rounds', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response data if needed
//         console.log(data);
//       })
      
//   };

//   return (
//     <div>
//       <h2>Playoff Matches:</h2>
//       <div>
//         <button onClick={() => handleRoundChange('Playoff Round of 16')}>Round of 16</button>
//         <button onClick={() => handleRoundChange('Playoff Quarterfinals')}>Quarterfinals</button>
//         <button onClick={() => handleRoundChange('Playoff Semifinals')}>Semifinals</button>
//         <button onClick={() => handleRoundChange('Playoff Final')}>Final</button>
//       </div>
//       {showMatches && (
//         <div>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Fixture:
//               <input type="text" name="fixture" value={formData.fixture} onChange={handleFormChange} />
//             </label>
//             <label>
//               Time (EST):
//               <input type="text" name="timeEST" value={formData.timeEST} onChange={handleFormChange} />
//             </label>
//             <label>
//               Date:
//               <input type="text" name="date" value={formData.date} onChange={handleFormChange} />
//             </label>
//             <button type="submit">Submit</button>
//           </form>
//           <ul>
//             {matches.map((match, index) => (
//               <li key={index}>
//                 Fixture: {match.fixture}, Time (EST): {match.timeEST}, Date: {match.date}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Playoffs;





// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function Playoffs() {



//   function handleRoundChange(){
//     console.log("test")
// }



//   return (
//     <div>
//       <h2>Playoff Matches:</h2>
//       <div>
//         <button onClick={() => handleRoundChange('Playoff Round of 16')}>Round of 16</button>
//         <button onClick={() => handleRoundChange('Playoff Quarterfinals')}>Quarterfinals</button>
//         <button onClick={() => handleRoundChange('Playoff Semifinals')}>Semifinals</button>
//         <button onClick={() => handleRoundChange('Playoff Final')}>Final</button>
//       </div>
      
      
//     </div>
//   );
// }

// export default Playoffs;











// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function Playoffs() {
//   const [matches, setMatches] = useState([]);
//   const [showMatches, setShowMatches] = useState(false);
//   const [formData, setFormData] = useState({
//     fixture: '',
//     timeEST: '',
//     date: ''
//   });

//   useEffect(() => {
//     fetch('http://localhost:3000/rounds')
//       .then((response) => response.json())
//       .then((data) => {
//         const playoffMatches = data.filter((round) => isPlayoffRound(round.round));
//         setMatches(playoffMatches);
//       });
//   }, []);

//   const isPlayoffRound = (round) => {
//     const playoffRounds = ['Playoff Round of 16', 'Playoff Quarterfinals', 'Playoff Semifinals', 'Playoff Final'];
//     return playoffRounds.includes(round);
//   };

//   const handleRoundChange = (round) => {
//     setShowMatches((prevShowMatches) => !prevShowMatches);
//     const selectedRound = matches.find((r) => r.round === round);
//     if (selectedRound) {
//       setMatches([selectedRound]);
//     } else {
//       setMatches([]);
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

//     fetch('http://localhost:3000/matches', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response data if needed
//         console.log(data);
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <h2>Playoff Matches:</h2>
//       <div>
//         <button onClick={() => handleRoundChange('Playoff Round of 16')}>Round of 16</button>
//         <button onClick={() => handleRoundChange('Playoff Quarterfinals')}>Quarterfinals</button>
//         <button onClick={() => handleRoundChange('Playoff Semifinals')}>Semifinals</button>
//         <button onClick={() => handleRoundChange('Playoff Final')}>Final</button>
//       </div>
//       {showMatches && (
//         <div>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Fixture:
//               <input type="text" name="fixture" value={formData.fixture} onChange={handleFormChange} />
//             </label>
//             <label>
//               Time (EST):
//               <input type="text" name="timeEST" value={formData.timeEST} onChange={handleFormChange} />
//             </label>
//             <label>
//               Date:
//               <input type="text" name="date" value={formData.date} onChange={handleFormChange} />
//             </label>
//             <button type="submit">Submit</button>
//           </form>
//           <ul>
//             {matches.map((match, index) => (
//               <li key={index}>
//                 Fixture: {match.fixture}, Time (EST): {match.timeEST}, Date: {match.date}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Playoffs;



















// import React, { useState } from 'react';

// const Playoffs = () => {
//   const [round16, setRound16] = useState(Array(8).fill({ date: '', team1: '', team2: '' }));
//   const [quarterFinals, setQuarterFinals] = useState(Array(4).fill({ date: '', team1: '', team2: '' }));
//   const [semiFinals, setSemiFinals] = useState(Array(2).fill({ date: '', team1: '', team2: '' }));
//   const [final, setFinal] = useState({ date: '', team1: '', team2: '' });

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const newResult = {
//       round16,
//       quarterFinals,
//       semiFinals,
//       final
//     };

//     const configObj = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newResult)
//     };

//     fetch('http://localhost:3000/playoffs', configObj)
//       .then(res => res.json())
//       .then(data => {
//         console.log('New result:', data);
//         // Clear form
//         setRound16(Array(8).fill({ date: '', team1: '', team2: '' }));
//         setQuarterFinals(Array(4).fill({ date: '', team1: '', team2: '' }));
//         setSemiFinals(Array(2).fill({ date: '', team1: '', team2: '' }));
//         setFinal({ date: '', team1: '', team2: '' });
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   const handleRound16InputChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedRound16 = [...round16];
//     updatedRound16[index] = { ...updatedRound16[index], [name]: value };
//     setRound16(updatedRound16);
//   };

//   const handleQuarterFinalsInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedQuarterFinals = [...quarterFinals];
//     updatedQuarterFinals[index] = { ...updatedQuarterFinals[index], [name]: value };
//     setQuarterFinals(updatedQuarterFinals);
//   };

//   const handleSemiFinalsInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedSemiFinals = [...semiFinals];
//     updatedSemiFinals[index] = { ...updatedSemiFinals[index], [name]: value };
//     setSemiFinals(updatedSemiFinals);
//   };

//   const handleFinalInputChange = (e) => {
//     const { name, value } = e.target;
//     setFinal(prevFinal => ({ ...prevFinal, [name]: value }));
//   };

//   return (
//     <div>
//       <h2>Playoffs</h2>
//       <form onSubmit={handleFormSubmit}>
//         <h3>Round of 16</h3>
//         {round16.map((match, index) => (
//           <div key={index}>
//             <label>
//               Date:
//               <input
//                 type="text"
//                 name="date"
//                 value={match.date}
//                 onChange={e => handleRound16InputChange(e, index)}
//               />
//             </label>
//             <label>
//               Team 1:
//               <input
//                 type="text"
//                 name="team1"
//                 value={match.team1}
//                 onChange={e => handleRound16InputChange(e, index)}
//               />
//             </label>
//             <label>
//               Team 2:
//               <input
//                 type="text"
//                 name="team2"
//                 value={match.team2}
//                 onChange={e => handleRound16InputChange(e, index)}
//               />
//             </label>
//           </div>
//         ))}

//         <h3>Quarter Finals</h3>
//         {quarterFinals.map((match, index) => (
//           <div key={index}>
//             <label>
//               Date:
//               <input
//                 type="text"
//                 name="date"
//                 value={match.date}
//                 onChange={e => handleQuarterFinalsInputChange(e, index)}
//               />
//             </label>
//             <label>
//               Team 1:
//               <input
//                 type="text"
//                 name="team1"
//                 value={match.team1}
//                 onChange={e => handleQuarterFinalsInputChange(e, index)}
//               />
//             </label>
//             <label>
//               Team 2:
//               <input
//                 type="text"
//                 name="team2"
//                 value={match.team2}
//                 onChange={e => handleQuarterFinalsInputChange(e, index)}
//               />
//             </label>
//           </div>
//         ))}

//         <h3>Semi Finals</h3>
//         {semiFinals.map((match, index) => (
//           <div key={index}>
//             <label>
//               Date:
//               <input
//                 type="text"
//                 name="date"
//                 value={match.date}
//                 onChange={e => handleSemiFinalsInputChange(e, index)}
//               />
//             </label>
//             <label>
//               Team 1:
//               <input
//                 type="text"
//                 name="team1"
//                 value={match.team1}
//                 onChange={e => handleSemiFinalsInputChange(e, index)}
//               />
//             </label>
//             <label>
//               Team 2:
//               <input
//                 type="text"
//                 name="team2"
//                 value={match.team2}
//                 onChange={e => handleSemiFinalsInputChange(e, index)}
//               />
//             </label>
//           </div>
//         ))}

//         <h3>Final</h3>
//         <div>
//           <label>
//             Date:
//             <input
//               type="text"
//               name="date"
//               value={final.date}
//               onChange={handleFinalInputChange}
//             />
//           </label>
//           <label>
//             Team 1:
//             <input
//               type="text"
//               name="team1"
//               value={final.team1}
//               onChange={handleFinalInputChange}
//             />
//           </label>
//           <label>
//             Team 2:
//             <input
//               type="text"
//               name="team2"
//               value={final.team2}
//               onChange={handleFinalInputChange}
//             />
//           </label>
//         </div>

//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Playoffs;