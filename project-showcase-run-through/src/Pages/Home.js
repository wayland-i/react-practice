import React, { useEffect, useState } from 'react';
import Projects from './Projects';

function Home({ allProjectsClicked, projects }) {


  return (
    <div>
      <h1>Home</h1>
      
      { allProjectsClicked ? <Projects projects={projects} /> : null}

    </div>
  );
}

export default Home;