import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CreateAccount from './create-account/CreateAccount';
import MailDetails from './mail-details/MailDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={MailDetails} exact />
          <Route path='/createAccount' component={CreateAccount} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
