import { actionsTypes, financiesType } from '../constants/financies';


const INITIAL_STATE = {
  financies: [],
  filteredFinancies: [],
  totalFinances: {
    total: 0,
    totalEntries: 0,
    totalExits: 0
  },
  financeFilter: {
    category: '',
    type: ''
  }
};


const reducers = (state = INITIAL_STATE, action) => {
  let newState = { ...INITIAL_STATE }

  const calculateEntries = (fin) => {

    return fin ? fin.filter(f => f.type === financiesType.Entrie)
      .reduce((acc, f) => acc + f.value, 0) : 0;
  }

  const calculateExists = (fin) => {
    return fin ?
      fin.filter(f => f.type === financiesType.Exit)
        .reduce((acc, f) => acc + f.value, 0) : 0;
  }

  switch (action.type) {

    case actionsTypes.ADD_FINANCE:
      newState.financies = [...state.financies, { ...action.payload }];
      newState.filteredFinancies = [...newState.financies];
      newState.totalFinances.totalEntries = calculateEntries(newState.financies);
      newState.totalFinances.totalExits = calculateExists(newState.financies);
      break;
    case actionsTypes.REMOVE_FINANCE:
      newState.financie = state.financies.filter(x => x.id !== action.payload.id);
      newState.filteredFinancies = [...newState.financies];
      newState.totalFinances.totalEntries = calculateEntries(newState.financies);
      newState.totalFinances.totalExits = calculateExists(newState.financies);
      break
    case actionsTypes.FILTER_FINANCE:
      newState.financeFilter.type = action.payload.type;
      newState.financeFilter.category = action.payload.category;

      if (action.payload.type != '') {
        newState.filteredFinancies = newState.filteredFinancies?.filter(f => f.type == action.payload.type);
      }

      if (action.payload.category != '') {
        newState.filteredFinancies = newState.filteredFinancies?.filter(f => f.category == action.payload.category);
      }
      break;
    default:
      return state;
  }


  newState.totalFinances.total = newState.totalFinances.totalEntries - newState.totalFinances.totalExits;


  return newState;
};

export { reducers };
