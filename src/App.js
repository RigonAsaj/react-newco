import React from 'react';
import Login from './Components/Login'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Register from './Components/Register';
import SelectService from './Components/SelectService';
import NotFound from './Components/NotFound';
import Service from './Components/Service';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/select" component={SelectService}/>
      <Route path="/service/:selectId" component={Service}/>
      <Route component={NotFound}/>
      </Switch>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
