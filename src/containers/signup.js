import { connect } from 'react-redux';
import SignUp from '../components/signUp/signup';
import { loadInitialState } from '../store/actions/loadInitialState';
import { SignUpRequest } from '../store/actions/signup';


function mapStateToProps(state) {
  
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    signUpRequest       : (data) => dispatch(SignUpRequest(data))
  };
}

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;