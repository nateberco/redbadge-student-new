import React from "react";
import Contact from "./components/Contact.jsx";
import MainPage from "./components/MainPage";
import SiteBar from "./components/Navbar.jsx";
import Store from "./components/Store.jsx";

import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";



function App() {
  return (
    <div>
      <SiteBar />
      <Switch>
          <Route 
          exact 
          path="/" 
          component={() => <MainPage title="Props Passed In" />}
          />

          {/* Another way of routing */}
          <Route exact path="/alt" >
            <MainPage title="Props Passed In" />
          </Route>
          {/* END */}

          <Route exact path="/store" component={Store} />
          <Route exact path="/contact" component={Contact} />
      </Switch>
      
      

    </div>
  );
}

export default App;
