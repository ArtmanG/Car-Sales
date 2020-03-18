import React from 'react';
import {buyItem} from '../actions/actions';
import {connect} from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      <button 
        className="button" 
        onClick={() => props.buyItem(props.feature)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

//syntax for grabbing actions from the sore without grabbing global state data
export default connect(null, {buyItem})(AdditionalFeature);
