






import React from "react";
import data from "../data.json";


function ParticipatingCountries() {
    return (
        <div>
            <h2>Women's World Cup 2023 - List of 32 teams:</h2>
            {data.countries.map((country, index) => (
                <div key={index}>{country}</div>
            ))}
        </div>
    )
}


export default ParticipatingCountries;