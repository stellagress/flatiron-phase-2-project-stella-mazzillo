import React, { useState } from "react";
import data from '../data.json';



function GroupStage() {

    const [currentRound, setCurrentRound] = useState(1)

    const handleRoundChange = round => {
        setCurrentRound(round)
    }

    const { countries, 'round 1': round1, 'round 2': round2, 'round 3': round3 } = data;




    return (
        <div>
            <img src="https://canadasoccer.com/wp-content/uploads/2023/02/20230222_FIFAWWC_nations.jpg" 
            alt="A-H Groups" 
            style={{ width: "1000px", height: "auto" }}
            />
            <div>
                <button onClick={() => handleRoundChange(1)}>Round 1</button>
                <button onClick={() => handleRoundChange(2)}>Round 2</button>
                <button onClick={() => handleRoundChange(3)}>Round 3</button>
            </div>

            {currentRound === 1 && (
        <div>
          <h2>Round 1 Matches</h2>
          {round1.map((match, index) => (
            <div key={index}>
              <p>{match.fixture}</p>
              <p>Time: {match.timeEST}</p>
              <p>Date: {match.date}</p>
            </div>
          ))}
        </div>
      )}

      {currentRound === 2 && (
        <div>
          <h2>Round 2 Matches</h2>
          {round2.map((match, index) => (
            <div key={index}>
              <p>{match.fixture}</p>
              <p>Time: {match.timeEST}</p>
              <p>Date: {match.date}</p>
            </div>
          ))}
        </div>
      )}

      {currentRound === 3 && (
        <div>
          <h2>Round 3 Matches</h2>
          {round3.map((match, index) => (
            <div key={index}>
              <p>{match.fixture}</p>
              <p>Time: {match.timeEST}</p>
              <p>Date: {match.date}</p>
            </div>
          ))}
        </div>
      )}

        </div>
    )
}


export default GroupStage; 