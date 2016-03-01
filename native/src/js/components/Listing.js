import React, { Component, ScrollView, StyleSheet,View, PropTypes } from 'react-native';
import Item from './Item';
export default class Listing extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const { listing } = this.props;
	if (listing && typeof listing !== 'undefined' && listing.length > 0) {
    return (
	<View style={styles.listingView}>
	  <ScrollView style={styles.scrollView}>
      {listing.map(function(result, i) {
        return <Item item={result} key={i}/>;
      })}    
      </ScrollView>
	  </View>
    );
	}
  else
  {
    return (<View/>)
  }
  }
}

var styles = StyleSheet.create({
  scrollView: {
	height: 550,
	paddingTop: 10,
	paddingBottom: 10
  },
  listingView: {
	
  }
});
