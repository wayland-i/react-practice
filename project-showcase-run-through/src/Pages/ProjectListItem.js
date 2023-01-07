import React from 'react';
import styled from 'styled-components';


const Tile = styled.div`
    width: auto;
    height: auto;
    border: 2px solid black;
    margin: 1%;
`



function ProjectListItem({ name, about, phase, link, image }) {
  return (
    <Tile>
        <h4>
            {name}
        </h4>
        <p>
            {about}
        </p>
    </Tile>
  );
}

export default ProjectListItem;