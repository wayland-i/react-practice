import React from 'react';
import styled from 'styled-components';
import ProjectListItem from './ProjectListItem';

const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  
  
`


function Projects({ projects }) {
  return (
    <div>  
      <Container>
      { projects.map(project => <ProjectListItem {...project} key={project.id}/>) }
      </Container>

    </div>
  );
}

export default Projects;