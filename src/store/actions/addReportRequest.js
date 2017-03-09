import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function addReportRequest(reportData){
   
    return dispatch => {
        dispatch(AddReportRequest());
         return fbConfigs.database.ref('/crimes').push(reportData)
         .then((data)=>{
            alert("Successfully Added.");
            dispatch(addReportRequestSuccess(data));
            console.log(data)
        }).catch((data)=>{
            alert("Something error");
            dispatch(addReportRequestFailed(data))
        })

        
    }
}

function AddReportRequest(){
    return {
        type : ActionTypes.addReportRequest
    };
}

function addReportRequestSuccess(data) {
    return {
        type: ActionTypes.addReportRequestSuccess,
        data
    };
}

function addReportRequestFailed() {
    return {
        type: ActionTypes.addReportRequestFailed
    };
}