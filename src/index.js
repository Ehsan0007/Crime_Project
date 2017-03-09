import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import LoginContainer from './containers/login';
import SignUpContainer from './containers/signup';
import Mainroot from './components/MainComponent/Mainroot'
import CrimeReport from './components/CrimeReport/Crimereport'
import Tables from './components/Table/table'
import MainReport from './components/report/report'
import AddReports from './components/report/Addreport'
import AddReportContainer from './containers/Addreport'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import * as mat from 'material-ui';

import {
  browserHistory,
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  Link,
  IndexLink
} from 'react-router';

class RootComponent extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Provider store={store}>
            <Router history={browserHistory}>

              <Route path="/" component={CrimeReport}>
                  <IndexRoute component={Tables}></IndexRoute>
                   <Route path="login"  component={LoginContainer}/>
                   <Route path="signup"  component={SignUpContainer}/>
                   <Route path="table"  component={Tables}/>
              </Route>

               <Route path="/signup" component={SignUpContainer}></Route>

               <Route path="/report" component={MainReport}>
                <Route path="Addreport" component={AddReportContainer}></Route>
               </Route>
               
             
            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render((
  <RootComponent />
),
  document.getElementById('root')
);

 {/*<Route path="/dashboard" component={DashboardContainer} />
                <Route path="/addReport" component={AddReportContainer} />
                <Route path="/myIncidents" component={LoadMyIncidentsContainer} />     
                <Route path="/viewAllCrimes" component={ViewAllCrimesContainer} />      */}