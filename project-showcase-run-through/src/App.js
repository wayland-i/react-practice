import { Switch, Route } from "react-router-dom";

import AddProjectForm from "./Pages/AddProjectForm";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects/new">
          <AddProjectForm/>
        </Route>
        <Route path="/about">
          <About />
        </Route>        
      </Switch>
    </div>
  );
}

export default App;
