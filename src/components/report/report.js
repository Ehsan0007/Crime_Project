import React, { Component } from 'react';
import * as mat from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} from 'react-router';

class MainReport extends Component{
    render(){
          const signup = {
           float:'right',
           height : 40,
           marginTop : 20,
           color : 'white',
           backgroundColor : 'transparent',
           margin : '10px',
           fontWeight : 'bold',
        }
        return(
            <div>
                <div>
                   <mat.AppBar
                        className="appbar"
                        title="Crime & Report Managment System"
                        iconClassNameRight="muidocs-icon-navigation-expand-more">
                        <Link to="/report/Addreport"><mat.RaisedButton label="AddReport" primary={true} style={signup} /></Link>
                         <Link to="/report/viewReport"><mat.RaisedButton label="ViewReport" primary={true} style={signup} /></Link>
                         <Link to=""><mat.RaisedButton label="Logout" primary={true} style={signup} /></Link>
                </mat.AppBar>
                 
            </div>
            {this.props.children}
            </div>
        )
    }
}

export default MainReport;