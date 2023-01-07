import React from 'react';
import styled from 'styled-components';
import ProjectListItem from './ProjectListItem';

const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-right: 1%;
  
`


function Projects({ projects }) {

  const listProjects = (projects) => {
    return projects.map(project => <ProjectListItem {...project} key={project.id}/>);
  }

  return (
    <div>  
      <Container>
        {listProjects(projects)}
      </Container>

    </div>
  );
}

export default Projects;