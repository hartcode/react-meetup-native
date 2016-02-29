import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
//import Example from '../components/Example';
//import * as ExampleActions from '../actions/ExampleActions';

import Listing from '../components/Listing';
import * as SearchActions from '../actions/SearchActions';
import ActionTypes from '../constants/ActionTypes';



class App extends Component {

 componentDidMount() {
  var API_URL = 'http://localhost:4090/api/listings';
   this.props.fetchData(API_URL, ActionTypes.REQUEST_DATA);
   
  }

  render() {

    return (
      <div className="row">
        <Listing listing={this.props.state.results}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.productList //called out in reducers/index.js
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);