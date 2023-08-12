import { actionsTypes } from '../constants/financies';

// localstorage
const INITIAL_STATE = {
  financies: [],
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_FINANCE:
      return { financies: [...state.financies, { ...action.payload }] };
    case actionsTypes.REMOVE_FINANCE:
      return { financies: state.financies.filter(x => x.id !== action.payload.id) };
    default:
      return state;
  }
};

export { reducers };
