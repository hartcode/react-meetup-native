import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../actions/SearchActions';
import ActionTypes from '../constants/ActionTypes';
export default class Item extends Component {

  constructor(props, context) {
    super(props, context);
	
  }

  render() {

    const { item } = this.props;
    console.log(item.image);
	    return (
      <div className="large-4 small-6 columns">
	  <img src={item.image.imageurl}></img>
        <div className="panel">
          <h5>{item.title}</h5>
          <h6 className="subheader">{item.price}</h6>
        </div>
      </div>
    );
  }
}

