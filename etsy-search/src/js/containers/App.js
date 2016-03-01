import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import Example from '../components/Example';
//import * as ExampleActions from '../actions/ExampleActions';

import Listing from '../components/Listing';
import * as SearchActions from '../actions/SearchActions';
import ActionTypes from '../constants/ActionTypes';

var ETSY_URL = 'openapi.etsy.com';
var ETSY_SHOP_ID = '12125241';
var ETSY_API_KEY = '7xsp1p3sut5xz5yf17jyuxcj';
var ETSY_LISTINGS_PATH = '/v2/shops/' + ETSY_SHOP_ID + '/listings/active?api_key=' + ETSY_API_KEY;
var ETSY_IMAGES_PATH = '/v2/listings/';


class App extends Component {

 componentDidMount() {
  var API_URL = 'https://'+ ETSY_URL + ETSY_LISTINGS_PATH;
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