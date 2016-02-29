import React, { Component, StyleSheet, Text, View, PropTypes } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../actions/SearchActions';
import ActionTypes from '../constants/ActionTypes';
export default class Item extends React.Component {

  constructor(props, context) {
    super(props, context);
	
  }

 /* 
 componentDidMount() {
     var API_URL = 'http://localhost:4090/api/images?id=' + this.props.item.listing_id;
	 console.log(API_URL);
     this.props.fetchData(API_URL, ActionTypes.REQUEST_DATA);
  }*/

  render() {

    const { item } = this.props;
    //console.log(item.image);
	    return (
        <View style={styles.container}>
          <Text style={styles.title}>
			  {item.title}
          </Text>
		  <Text style={styles.price}>
			  {item.price}
          </Text>
         </View>
    );
  }
}
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  price: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  }
});


