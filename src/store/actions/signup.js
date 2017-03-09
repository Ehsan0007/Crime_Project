import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';
import {Link,browserHistory} from 'react-router'
import MainReport from '../../components/report/report'

export function SignUpRequest(SignUpData) {
    return dispatch => {
        dispatch(signUpRequest());
        fbConfigs.fbAuth.createUserWithEmailAndPassword(
            SignUpData.email, SignUpData.password
        )
            .then((data) => {
                const userRef = fbConfigs.database.ref('/users/' + data.uid);
                userRef.set({
                    uid : data.uid,
                    email: data.email,
                    name: SignUpData.name, gender: SignUpData.gender == 1 ? "Male" : "Female", cellNumber: SignUpData.cellNumber
                }, signUpSuccessData => {
                    dispatch(SignUpRequestSuccess({ uid: data.uid, userEmail: data.email, name: SignUpData.name, gender: SignUpData.gender == 1 ? "Male" : "Female",  cellNumber: SignUpData.cellNumber }));
                    browserHistory.push('/report')
                });
            })
            .catch((error) => {
                alert("Error Occurred Please try again.");
                dispatch(SignUpRequestFailed(error));
            });
        // console.log("Hme firebase se ye mila" +fbConfigs.fbAuth.email)
        console.log("Hme firebase se y e mila" ,fbConfigs)
    }
}

function signUpRequest() {
    return {
        type: ActionTypes.SignUpRequest
    };
}

function SignUpRequestSuccess(data) {
    return {
        type: ActionTypes.SignUpRequestSuccess,
        data
    };
}

function SignUpRequestFailed() {
    return {
        type: ActionTypes.SignUpRequestFailed
    };
}