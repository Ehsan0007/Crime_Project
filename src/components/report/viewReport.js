import React, { Component } from 'react';
import * as mat from 'material-ui';
import Moment from 'react-moment';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} from 'react-router';

class ViewReport extends Component{


       componentDidMount() {
        // this.props.loadUserRequest();
        this.props.loadAllCrimesRequest();
    }

       componentWillReceiveProps() {
        setTimeout(() => {
            if (!this.props.application || !this.props.application.user) {
                // browserHistory.push('/login');
            }else if(this.props.application && this.props.application.user && !this.props.application.user.isAdmin){
                alert("You are not Allowed to go to this page.");
                // browserHistory.push('/dashboard');
            }
        }, 5)
    }


    render(){
        const application =  this.props && this.props.application && this.props.application.allCrimes ? this.props.application.allCrimes : [] ;
            console.log(application)
        return(
                 <div>
                <mat.Card className="card">
                    <br/>
                    <h2 style={{textAlign:'center'}}>Affected Person Detail</h2>
                    <br/>
                    {application && application.length > 0 ? 
                         <Table>
                            <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Number</TableHeaderColumn>
                                <TableHeaderColumn>Affected Person</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Gender</TableHeaderColumn>
                                <TableRowColumn>IncidentType</TableRowColumn>
                                <TableHeaderColumn>City</TableHeaderColumn>
                                <TableHeaderColumn>Time</TableHeaderColumn>
                            </TableRow>
                            </TableHeader>
                            <TableBody>
                                {application.map((todo,index)=>{
                                      return <TableRow key={index}>
                                        <TableRowColumn>{index+1}</TableRowColumn>
                                        <TableRowColumn><mat.Avatar 
                                          src={todo.gender == 'Male' ? "http://www.cablesyequipos.net/images/avatar.png": "http://graphicalx.com/img/female-avatar.jpg"}
                                          size={30}
                                          />
                                        </TableRowColumn>
                                        <TableRowColumn>{todo.name}</TableRowColumn>
                                        <TableRowColumn>{todo.gender}</TableRowColumn>
                                        <TableRowColumn>{todo.incidentType}</TableRowColumn>
                                        <TableRowColumn>{todo.citynames}</TableRowColumn>
                                       <mat.TableHeaderColumn><Moment format="MM/DD/YYYY HH:mm">{todo.incidentTime}</Moment></mat.TableHeaderColumn>
                                    </TableRow>
                                })}
                                      
                                
                                    
                            </TableBody>
                    </Table>
                    : null}
                
            </mat.Card>
            </div>
        )
    }
}

export default ViewReport;

// todo.inicidentType==1?"Crime":todo.inicidentType==2?"Missing":todo.inicidentType==4?"other":"Complain"