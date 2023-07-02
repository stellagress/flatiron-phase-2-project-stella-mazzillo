# Phase 2 - Project Women's World Cup - Stella Mazzillo

This project is a React-based website for the Women's World Cup 2023. It provides information about the participating countries, and game schedules. Also, it allows users to enter the playoffs info such as fixture, time and date (when available).
- bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

Home Page: The home page displays 2 images related to the Women's World Cup 2023.
Navigation Bar: The navigation bar allows users to navigate between different sections of the website, including the home page, participating countries, and games.
Participating Countries: The participating countries section provides a list of 32 teams that are playing in this World Cup. Users can search for a specific country using the search bar.
Games: The games section displays the schedule of games for the Women's World Cup 2023. It includes information such as the date, time, and teams playing in each game. Users are able to insert same information for the round of 16, quarter finals, semi-finals and finals, if desired. 


## Project Structure

The project follows a basic React folder structure:

The App component is the main component that renders other components based on the current route. It uses the Switch and Route components from react-router-dom to define the routes and render the corresponding components.

The NavBar component displays a navigation bar with links to different pages of the application.

The Home component displays two images related to the Women's World Cup.

The ParticipatingCountries component displays a list of participating countries in the tournament. It retrieves the country data from a data.json file.

The GroupStage component displays the group stage matches of the tournament. It uses the useState hook to manage the current round of matches and renders the matches based on the selected round. It also uses react-router-dom to handle the routing and display the matches for the selected round.

The data.json file contains the name and flag of the 32 participating countries.

The db.json contains the fixture, time and date of the group stage matches.


## Getting Started

Clone the repository: git clone <repository-url>
Navigate to the project directory, using cd directory-name
Install dependencies: npm install
Start the development server: npm start
Open your browser and visit http://localhost:3000 to view the website.

## Contributor's Guide
Contributions to the Women's World Cup 2023 Website project are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request.


## License
Project planets is licensed under the MIT License. See the 'LICENSE' file for more information.


