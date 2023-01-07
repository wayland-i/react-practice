import React from 'react';
import styled from 'styled-components';


const Tile = styled.div`
    width: auto;
    height: auto;
    border: 2px solid black;
    margin: 1%;
    padding: 3%;

    & > * {
      text-align: center;
    }
`



function ProjectListItem({ name, about, phase, link, image }) {
  return (
    <Tile>
        <h3>
            {name}
        </h3>
        <p>
            {about}
        </p>
    </Tile>
  );
}

export default ProjectListItem;