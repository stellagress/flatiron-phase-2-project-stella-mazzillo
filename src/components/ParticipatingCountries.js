import React from "react";
import data from "../data.json";


function ParticipatingCountries() {
    return (
        <div>
            {data.countries.map((country, index) => (
                <div key={index}>{country}</div>
            ))}
        </div>
    )
}


export default ParticipatingCountries;