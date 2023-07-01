import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navbar">
            <NavLink
            to="/"
            exact
            >
                Home
            </NavLink>


            <NavLink
            to="/participating-countries"
            exact
            >
                Participating Countries
            </NavLink>


            <NavLink
            to="/group-stage"
            exact
            >
                Group Stage
            </NavLink>


            <NavLink
            to="/playoffs"
            exact
            >
                Playoffs
            </NavLink>


        </div>
    )
}

export default NavBar;