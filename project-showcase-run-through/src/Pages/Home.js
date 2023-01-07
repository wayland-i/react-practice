import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Projects from './Projects';

function Home({ allProjectsClicked, projects, setAllProjectsClicked={setAllProjectsClicked} }) {

  const Greeting = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    padding: 2%;
    margin: 0 20% 0 20%;

    button {
      font-size: 5rem;
    }
  `

  return (
    <div>
      <h1>Home</h1>

    <Greeting>
      <h2>This is my portfolio website</h2>
      <button onClick={() => setAllProjectsClicked(true)}>Check out my work!</button>
    </Greeting>
      
      { allProjectsClicked ? <Projects projects={projects} /> : null}

    </div>
  );
}

export default Home;