import React, { Component, View, PropTypes } from 'react-native';
import Item from './Item';
export default class Listing extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const { listing } = this.props;
	if (listing && typeof listing !== 'undefined' && listing.length > 0) {
    return (
      <View>
      {listing.map(function(result, i) {
        return <Item item={result} key={i}/>;
      })}    
      </View>
    );
	}
  else
  {
    return (<View/>)
  }
  }

}

Listing.propTypes = {
    results: PropTypes.object.isRequired 
};

