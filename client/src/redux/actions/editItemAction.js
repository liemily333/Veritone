import * as types from '../../constants/actionTypes';

export const editItem = (item) => {
  return {
    type: types.EDIT_ITEM,
    payload: item,
  };
};
