

import React, { useState } from "react";
import data from "../data.json";


//The ParticipatingCountries component displays a list of participating countries in the tournament. It retrieves the country data from a data.json file.

function ParticipatingCountries() {

  //state for search bar:
  const [searchTerm, setSearchTerm] = useState("");

  // Event handler:
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // filter search based on user's typing, includes partial matches
  const filteredCountries = data.countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="countries-container">
      <h2 className="first-header">Women's World Cup 2023 - List of 32 teams:</h2>
      <h4 className="second-header">check if your country is participating:</h4>
      
      {/* Search Bar*/}
      <div className="search-bar">
        <input
          type="text"
          name = "country"
          placeholder="Search country"
          value={searchTerm}
          onChange={handleSearch}
          autoComplete="off"
        />
      </div>

      {/* Countries from data.json */}
      <div className="countries-grid">
        {filteredCountries.map((country, index) => (
          <div className="country-item" key={country.id}>
            <img src={country.flag} alt={country.name} />
            <strong>{country.name}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParticipatingCountries;





// import React from "react";
// import data from "../data.json";


// function ParticipatingCountries() {
//     return (
//         <div>
//             <h2>Women's World Cup 2023 - List of 32 teams:</h2>
//             {data.countries.map((country, index) => (
//                 <div key={index}>{country}</div>
//             ))}
//         </div>
//     )
// }


// export default ParticipatingCountries;