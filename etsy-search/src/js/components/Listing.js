import React, { Component, PropTypes } from 'react';
import Item from './Item';
export default class Listing extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const { listing } = this.props;
	if (typeof listing !== 'undefined') {
    return (
      <div>
      {listing.map(function(result, i) {
        return <Item item={result} key={i}/>;
      })}    
      </div>
    );
	}
  }
}

Listing.propTypes = {
    results: PropTypes.object.isRequired 
};

