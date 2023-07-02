
import React from "react";
import { NavLink } from "react-router-dom";


//The NavBar component displays a navigation bar with links to 3 different pages of the application.

function NavBar(){
    return (
        <div className="navbar">
            {/* Link#1 - Home link */}
            <NavLink
            to="/"
            exact
            className="navbar-link"
            activeClassName="active"
            >
                Home
            </NavLink>

            {/* Link#2 - Participating Countries link */}
            <NavLink
            to="/participating-countries"
            exact
            className="navbar-link"
            activeClassName="active"
            >
                Participating Countries
            </NavLink>


            {/* Link#3 - Games link */}
            <NavLink
            to="/games"
            exact
            className="navbar-link"
            activeClassName="active"
            >
                Games
            </NavLink>



        </div>
    )
}

export default NavBar;