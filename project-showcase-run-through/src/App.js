import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import AddProjectForm from "./Pages/AddProjectForm";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavBar from "./Components/NavBar";


function App() {

  const [projects, setProjects] = useState([]);
  const [allProjectsClicked, setAllProjectsClicked] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    .then(data => setProjects(data))

  }, []);

  const AddingProject = (newProject) => {
    fetch('http://localhost:4000/projects', {
      method: 'POST',
      body: JSON.stringify(newProject),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <NavBar setAllProjectsClicked={setAllProjectsClicked}/>

      <Switch>
        <Route exact path="/">
          <Home 
            setAllProjectsClicked={setAllProjectsClicked}
            allProjectsClicked={allProjectsClicked}
            projects={projects}
          />
        </Route>
        <Route path="/projects/new">
          <AddProjectForm AddingProject={AddingProject}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>        
      </Switch>
    </div>
  );
}

export default App;
