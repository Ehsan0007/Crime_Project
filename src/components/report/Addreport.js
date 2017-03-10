import React, { Component } from 'react';
import * as mat from 'material-ui';
import './report.css';

import { browserHistory,Router,Route,IndexRoute,Link,IndexLink } from 'react-router';

class AddReports extends Component{
    city;
    constructor(props){
        super(props);
        this.state = {
            name : '', gender:1 ,inicidentType:1, cityname: "Washington" , incidentDate : new Date(),incidentTime : new Date(),
        }
        this.cities = [
            "Manchester",
            "Philiphines",
            "Kadha Market",
            "North America",
            "South-Africa",
            "Los-Angeles",
            "Pakistan",
            "Washington",
        ]
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleGenderTypeChange = (event,index,value) => {this.setState({gender:value}); console.log(value)}
    handlecitynameChange = (event,index,value) =>{ this.setState({cityname : value}); console.log(value) }
    handleInicidentTypeTypeChange = (event,index,value) =>{ this.setState({inicidentType : value}); console.log(value) }

    handleDateChange = 
    (event,date) => {
        this.setState({
            incidentDate : date
        });
        console.log("Current Date is "  + date);
     }

     handlechangeTimePicker= (event,date)=>{
         this.setState({
            incidentTime  :date
         });
         console.log("Current Time is " + date)
     }

    // componentDidMount() {
    //     this.props.loadUserRequest();
    // }

     componentWillReceiveProps() {
        setTimeout(() => {
            if (!this.props.application || !this.props.application.user) {
                // browserHistory.push('/login');
            }
        }, 5)
    }

    handleSubmit(evt){
         evt.preventDefault();
         const name = this.refs.name.getValue();
         const gender = this.state.gender==1 ? "Male" : this.state.gender==2? "Female":"";
         const incidentDate = this.state.inicidentDate;
         const incidentTime = this.state.incidentTime;
        const cityname = this.state.cityname;
         const incidentType = this.state.inicidentType==1?"Crime" :this.state.incidentType==2?"Missing":this.state.incidentType==4?"Other":"Complian";

        
         const userAllData= {
            //  uid : this.props.application.uid,
            //  userEmail : this.props.application.email,
             name  : name,
             citynames :cityname,
             gender : gender,
            //  incidentDate : incidentDate,
            //  incidentTime : incidentTime,
              incidentType : incidentType,
         }
         this.props.addNewReports(userAllData);
       
    }
     


      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        const {application} = this.props.application
        return(
            <div>
                <mat.Card className="cardwidht">
                    <mat.CardTitle title="Add New Report / Complain"/>
                    <mat.CardText>
                        <form onSubmit={this.handleSubmit}>
                            <h2>Personal Info</h2>
                            <mat.Divider/>
                            <mat.TextField
                                hintText="Ehsan?"
                                floatingLabelText="Person Affected Name"
                                className="full-width-container"
                                ref="name"
                                name="name"
                                required={true}
                                type="text"
                                value={this.state.name}
                                onChange={this.handleInputChange}>
                            </mat.TextField><br/>
                            <mat.SelectField
                                ref="gender"
                                name="gender"
                                floatingLabelText="Affected Gender"
                                className="full-width-container"
                                value={this.state.gender}
                                required={true}
                                onChange={this.handleGenderTypeChange}
                                >
                                <mat.MenuItem value={1} primaryText="Male" />
                                <mat.MenuItem value={2} primaryText="Female" />

                                </mat.SelectField><br/>

                                <mat.DatePicker
                                ref="inicidentDate"
                                hintText="Inicident Date"
                                floatingLabelText="Inicident Date"
                                value={this.state.incidentDate}
                                onChange={this.handleDateChange}
                                />
                                  <mat.TimePicker
                                    ref="incidentTime"
                                    name="cityname"
                                    floatingLabelText="Incident Time"
                                    onChange={this.handlechangeTimePicker}
                                    value={this.state.incidentTime}
                                    className="full-width-container"
                                    required={true}
                                ></mat.TimePicker><br/>

                                <mat.SelectField
                                    ref="cityname"
                                    name="cityname"
                                    floatingLabelText="City Name"
                                    onChange={this.handlecitynameChange}
                                    value={this.state.incidentType}
                                    className="full-width-container"
                                    required={true}>
                                    
                                    {
                                        this.cities.map(city=>{
                                            return <mat.MenuItem key={city} value={city} primaryText={city}></mat.MenuItem>
                                        })
                                    }
                                    </mat.SelectField>

                                    <mat.SelectField
                                        ref="inicidentType"
                                        name="inicidentType"
                                        floatingLabelText="Inicident Type"
                                        className="full-width-container"
                                        value={this.state.inicidentType}
                                        onChange={this.handleInicidentTypeTypeChange}
                                        required={true}
                                        >
                                        <mat.MenuItem value={1} primaryText="Crime" />
                                        <mat.MenuItem value={2} primaryText="Missing" />
                                        <mat.MenuItem value={3} primaryText="Complain" />
                                        <mat.MenuItem value={4} primaryText="Other" />

                                        </mat.SelectField><br/>

                                        <mat.RaisedButton  type="submit" label="Submit" primary={true}/>

                            
                        </form>
                    </mat.CardText>
                </mat.Card>
            </div>
        )
    }
}

export default AddReports;