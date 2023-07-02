

import React, { useState } from "react";
import data from "../data.json";


function ParticipatingCountries() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = data.countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="countries-container">
      <h2>Women's World Cup 2023 - List of 32 teams:</h2>
      <h4>check if your country is participating:</h4>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search country"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="countries-grid">
        {filteredCountries.map((country, index) => (
          <div className="country-item" key={index}>
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