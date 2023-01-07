import { Switch, Route } from "react-router-dom";

import AddProjectForm from "./Pages/AddProjectForm";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/addproject">
        <AddProjectForm/>
      </Route>
      <Route path="/about">
        <About />
      </Route>        
    </Switch>
  );
}

export default App;
