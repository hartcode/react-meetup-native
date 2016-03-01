import React, { Component, StyleSheet, Text,Image, View, PropTypes } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../actions/SearchActions';
import ActionTypes from '../constants/ActionTypes';
export default class Item extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const { item } = this.props;
    return (
        <View style={styles.container}>
	     <Image source={{uri:item.image.imageurl}} style={{width:75, height:75}} />
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


