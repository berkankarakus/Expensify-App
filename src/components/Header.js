import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <div>
        <header>
            <h1>Extensify</h1>

            <NavLink to = "/" activeClassName = "is-active" exact = {true}>Go Home</NavLink>
            <br />
            <NavLink to = "/create" activeClassName = "is-active">Create Expense</NavLink>
            <br />
            <br />
            <br />
        </header>
    </div>
);

export default Header;