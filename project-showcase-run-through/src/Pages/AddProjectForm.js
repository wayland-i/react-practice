import React, { useState } from 'react';
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

function AddProjectForm({ AddingProject }) {

  const [formData, setFormData] = useState({
    name: "",
    about: "",
    phase: "",
    link: "",
    image: ""
  });


  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AddingProject(formData);
  }

  return (
    <div>

      <AddForm onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id='name' name='name' value={formData.name} onChange={handleOnChange}></input>
        <label htmlFor='about'>About:</label>
        <textarea id='about' name='about' value={formData.about} onChange={handleOnChange} style={{"fontSize": "1.5rem", "height": "130px"}}></textarea>
        <label htmlFor='phase'>Phase:</label>
        <select id='phase' name='phase' value={formData.phase} onChange={handleOnChange}>
          <option>Select a phase...</option>
          <option value="Phase 1">Phase 1</option>
          <option value="Phase 2">Phase 2</option>
          <option value="Phase 3">Phase 3</option>
          <option value="Phase 4">Phase 4</option>
          <option value="Phase 5">Phase 5</option>
        </select>
        <label htmlFor='link'>Link:</label>
        <input id='link' name='link' value={formData.link} onChange={handleOnChange}></input>
        <label htmlFor='image'>Image:</label>
        <input id='image' name='image' value={formData.image} onChange={handleOnChange}></input>
        <button type='submit'>Submit!</button>
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