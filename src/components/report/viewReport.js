import React, { Component } from 'react';
import * as mat from 'material-ui';
import './table.css';
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
    render(){
        return(
                 <div>
                <mat.Card className="card">
                    <h2 style={{textAlign:'center'}}>Affected Person Detail</h2>
                 <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Number</TableHeaderColumn>
                        <TableHeaderColumn>Affected Person</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Gender</TableHeaderColumn>
                         <TableRowColumn>Incident</TableRowColumn>
                        <TableHeaderColumn>City</TableHeaderColumn>
                        <TableHeaderColumn>Time</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Male</TableRowColumn>
                        <TableRowColumn>Crime</TableRowColumn>
                        <TableRowColumn>Washington</TableRowColumn>
                         <TableRowColumn>12/2/2017 05:30</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>Male</TableRowColumn>
                        <TableRowColumn>Crime</TableRowColumn>
                        <TableRowColumn>Washington</TableRowColumn>
                        <TableRowColumn>12/2/2017 05:30</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>3</TableRowColumn>
                        <TableRowColumn>3</TableRowColumn>
                        <TableRowColumn>Stephanie Sanders</TableRowColumn>
                        <TableRowColumn>Male</TableRowColumn>
                        <TableRowColumn>Crime</TableRowColumn>
                        <TableRowColumn>Washington</TableRowColumn>
                         <TableRowColumn>12/2/2017 05:30</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>4</TableRowColumn>
                        <TableRowColumn>4</TableRowColumn>
                        <TableRowColumn>Steve Brown</TableRowColumn>
                        <TableRowColumn>Male</TableRowColumn>
                        <TableRowColumn>Crime</TableRowColumn>
                        <TableRowColumn>Washington</TableRowColumn>
                         <TableRowColumn>12/2/2017 05:30</TableRowColumn>
                    </TableRow>
                    </TableBody>
            </Table>
            </mat.Card>
            </div>
        )
    }
}

export default ViewReport;