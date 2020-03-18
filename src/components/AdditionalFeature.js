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

export default connect(null, {buyItem})(AdditionalFeature);
