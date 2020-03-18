export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

const removeFeature = item => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
  };

  const buyItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    }
  };