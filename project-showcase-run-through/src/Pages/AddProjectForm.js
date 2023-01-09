import React from 'react';
import styled from 'styled-components';

const AddForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: darkblue;
  margin: 10%;
  height: 900px;

  & > * {
    width: 400px;
    /* height: 70px; */
    font-size: 2.5rem;
    
  }

`

function AddProjectForm() {
  return (
    <div>

      <AddForm>
        <label>Name:</label>
        <input></input>
        <label>About:</label>
        <textarea style={{"fontSize": "1.5rem", "height": "130px"}}></textarea>
        <label>Phase:</label>
        <select></select>
        <label>Link:</label>
        <input></input>
        <label>Image:</label>
        <input></input>
      </AddForm>

    </div>
  );
}

export default AddProjectForm;


{/* <input>Name</input>
<textarea>About</textarea>
<select>Phase</select>
<input>link</input>
<input>img</input> */}