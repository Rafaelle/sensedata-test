import { actionsTypes, financiesType } from '../constants/financies';

// localstorage
const INITIAL_STATE = {
  financies: [],
  filteredFinances:[],
  totalFinances: {
    total:0,
    totalEntries:0,
    totalExits:0
  },
};

const reducers = (state = INITIAL_STATE, action) => {
  let financies;
  let entries;
  let exits;
  let filteredFinances;

  const calculateEntries= (financies) =>{

    return financies.filter(f=>f.type===financiesType.Entrie)
    .reduce((acc, f)=> acc+f.value, 0);
  }

  const calculateExists= (financies) =>{
    return financies.filter(f=>f.type===financiesType.Exit)
    .reduce((acc, f)=> acc+f.value, 0);
  }


  switch (action.type) {
    case actionsTypes.ADD_FINANCE:
      financies = [...state.financies, { ...action.payload }];
    break;
    case actionsTypes.REMOVE_FINANCE:
      financies = state.financies.filter(x => x.id !== action.payload.id);
    break
    case actionsTypes.FILTER_FINANCE:
      console.log(action.payload)
   

    //financies = [...state.financies, { ...action.payload }];

      break; 
      default:
      return state;
  }
  entries = calculateEntries(financies);
  exits = calculateExists(financies);
  return { 
    financies: financies,
    totalFinances: {
      total:entries - exits,
      totalEntries:entries,
      totalExits:exits
    }
  };
};

export { reducers };
