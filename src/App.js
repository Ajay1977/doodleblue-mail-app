import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CreateAccount from './create-account/CreateAccount';
import MailDetails from './mail-details/MailDetails';
import Dashboard from './Dashboard';
import ErrorBoundary from './ErrorBoundary';
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
          <ErrorBoundary>
            <Route path='/' component={Dashboard} exact />
            <Route path='/createAccount' component={connect(null, mapDispatchToProps)(CreateAccount)} exact />
            <Route path='/mailApp/inbox/:userId' component={MailDetails} exact />
            <Route path='/mailApp/sent/:userId' component={MailDetails} exact />
          </ErrorBoundary>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
