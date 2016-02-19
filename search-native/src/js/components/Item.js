import React, { Component, PropTypes } from 'react';

export default class Item extends Component {

  constructor(props, context) {
    super(props, context);
  }

  

  render() {

    const { item } = this.props;
    
    return (
      <div className="large-4 small-6 columns">
        <img src="http://placehold.it/1000x1000&amp;text=Thumbnail"></img>
        <div className="panel">
          <h5>{item.title}</h5>
          <h6 className="subheader">{item.price}</h6>
        </div>
      </div>
    
    );
  }
}





