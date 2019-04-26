import React from 'react';
import {Switch, Route} from "react-router-dom";

import About from "./About"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Calculator from './Calculator';
import Home from "./Home"


function App(){
  const styles = {
  }
  return (
    <div style={styles}>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/calculator" component={Calculator} />
        </Switch>
      <Footer />
    </div>
  )
}
export default App;
