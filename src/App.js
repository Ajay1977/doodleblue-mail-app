import React from 'react';
import { Route, Switch, BrowserRouter, HashRouter } from 'react-router-dom';
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
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <ErrorBoundary>
            <Route path={process.env.PUBLIC_URL + '/'} component={Dashboard} exact />
            <Route path={process.env.PUBLIC_URL + '/createAccount'} component={connect(null, mapDispatchToProps)(CreateAccount)} exact />
            <Route path={process.env.PUBLIC_URL + '/mailApp/inbox/:userId'} component={MailDetails} exact />
            <Route path={process.env.PUBLIC_URL + '/mailApp/sent/:userId'} component={MailDetails} exact />
          </ErrorBoundary>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
