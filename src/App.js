import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CreateAccount from './create-account/CreateAccount';
import MailDetails from './mail-details/MailDetails';
import { connect } from 'react-redux';
import { addUser, setInitMailCount } from './actions'
import './App.css';

function App() {
  const mapDispatchToProps = {
    addUser,
    setInitMailCount
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={connect(null, mapDispatchToProps)(CreateAccount)} exact />
          <Route path='/mailApp/:userId' component={MailDetails} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
