import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../actions/SearchActions';
import ActionTypes from '../constants/ActionTypes';
export default class Item extends Component {

  constructor(props, context) {
    super(props, context);
	
  }

  
 componentDidMount() {
     var API_URL = 'http://localhost:4090/api/images?id=' + this.props.item.listing_id;
	 console.log(API_URL);
     this.props.fetchData(API_URL, ActionTypes.REQUEST_DATA);
  }

  render() {

    const { item } = this.props;
    
    return (
      <div className="large-4 small-6 columns">
        <img src={this.props.item.url_fullxfull}></img>
        <div className="panel">
          <h5>{item.title}</h5>
          <h6 className="subheader">{item.price}</h6>
        </div>
      </div>
    
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.imageList //called out in reducers/index.js
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);





