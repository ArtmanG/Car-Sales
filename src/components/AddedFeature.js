import React from 'react';
import {removeFeature} from '../actions/actions';
import {connect} from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      <button 
        className="button" 
        onClick={() => props.removeFeature(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

//syntax for grabbing actions from the sore without grabbing global state data
export default connect(null, {removeFeature})(AddedFeature);