import { actionsTypes } from '../constants/financies';

const actions = {
  add: finance => ({
    type: actionsTypes.ADD_FINANCE,
    payload: finance,
  }),
  remove: finance => ({
    type: actionsTypes.REMOVE_FINANCE,
    payload: finance,
  }),
  filter: (type, category) =>({
    type: actionsTypes.FILTER_FINANCE,
    payload: {type:type, category:category}
  })
};

export { actions };
