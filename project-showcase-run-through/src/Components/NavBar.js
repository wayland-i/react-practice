import React from 'react';
import { NavLink, Link } from "react-router-dom";



function NavBar() {
  return (
    <div>
        <Link to="/"> 
            <span>//</span>
        </Link>
        <span>Project Showcase</span>
        <NavLink to="/">
            All Projects
        </NavLink>
        <NavLink to="/projects/new">
            Add Project
        </NavLink>
        <NavLink to="/about">
            About
        </NavLink>
    </div>
  );
}

export default NavBar;