import React from 'react';
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.header`
    /* display: flex; */
    & > * {
    margin: 15px;
    }

`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    
    span {
    margin: 15px;
    }
`


function NavBar() {
    return (
    <Header>
        <div>
            <Link to="/"> 
                <span>//</span>
            </Link>
            <span>Project Showcase</span>
        </div>

        <Navigation>
            <NavLink to="/">
                All Projects
            </NavLink>
            <NavLink to="/projects/new">
                Add Project
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
        </Navigation>
    </Header>
  );
}

export default NavBar;