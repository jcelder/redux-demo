import App from '../components/App.jsx';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/actions';

const mapStateToProps = (state) => {

  return {
    counter: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementStuff: () => {dispatch(increment())},
    decrementStuff: () => {dispatch(decrement())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
