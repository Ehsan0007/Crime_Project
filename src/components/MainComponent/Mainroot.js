import React, { Component } from 'react';
import * as mat from 'material-ui';
import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} from 'react-router';

class Mainroot extends Component{
    render(){
          const signupMain = {
            width : '60%',
            margin : '0 auto'
        }
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
                        <mat.RaisedButton label="ViewCrimeReport" primary={true} style={signup} />
                        <mat.RaisedButton label="SignUp" primary={true} style={signup} />
                        <mat.RaisedButton label="Login" primary={true} style={signup} />
                </mat.AppBar>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Mainroot;