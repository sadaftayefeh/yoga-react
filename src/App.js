import TopBar from "./Navbar/TopBar";
import Home from "./Home/pages/Home";
import Login from "./Home/pages/Login/Login";
import Footer from "./Footer/Footer";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import About from "./Home/pages/Login/About/About";





function App() {
  return (
    <Router>
      <TopBar/>
      
      <Switch>
      <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>


      </Switch>
      <Footer/>
      
    </Router>
  );
}

export default App;
