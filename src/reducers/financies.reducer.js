import { actionsTypes, financiesType } from '../constants/financies';

// localstorage
const INITIAL_STATE = {
  financies: [],
  filteredFinancies: [],
  totalFinances: {
    total: 0,
    totalEntries: 0,
    totalExits: 0
  },
};

const reducers = (state = INITIAL_STATE, action) => {
  let financies;
  let entries;
  let exits;
  let filteredFinancies;

  const calculateEntries = (financies) => {

    return financies? finances.filter(f => f.type === financiesType.Entrie)
      .reduce((acc, f) => acc + f.value, 0):0;
  }

  const calculateExists = (financies) => {
    return finances?
    financies.filter(f => f.type === financiesType.Exit)
      .reduce((acc, f) => acc + f.value, 0):0;
  }


  switch (action.type) {
    case actionsTypes.ADD_FINANCE:
      financies = [...state.financies, { ...action.payload }];
      filteredFinancies = [...financies];
      break;
    case actionsTypes.REMOVE_FINANCE:
      financies = state.financies.filter(x => x.id !== action.payload.id);
      filteredFinancies = [...financies];
      break
    case actionsTypes.FILTER_FINANCE:
      console.log(action.payload);
      filteredFinancies = [...state.financies];
      
      if(action.payload.type != ''){
        filteredFinancies = filteredFinancies?.filter(f=> f.type == action.payload.type );
      }

      if(action.payload.category != ''){
        filteredFinancies = filteredFinancies?.filter(f=> f.category == action.payload.category);
      }



      break;
    default:
      return state;
  }
  entries = calculateEntries(financies);
  exits = calculateExists(financies);
  console.log(entries, exits)

  return {
    financies: financies,
    totalFinances: {
      total: entries - exits,
      totalEntries: entries,
      totalExits: exits
    }
  };
};

export { reducers };
