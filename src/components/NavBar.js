
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navbar">
            <NavLink
            to="/"
            exact
            className="navbar-link"
            activeClassName="active"
            >
                Home
            </NavLink>


            <NavLink
            to="/participating-countries"
            exact
            className="navbar-link"
            activeClassName="active"
            >
                Participating Countries
            </NavLink>


            <NavLink
            to="/games"
            exact
            className="navbar-link"
            activeClassName="active"
            >
                Games
            </NavLink>


            <NavLink
            to="/playoffs"
            exact
            className="navbar-link"
            activeClassName="active"
            >
                Playoffs
            </NavLink>


        </div>
    )
}

export default NavBar;