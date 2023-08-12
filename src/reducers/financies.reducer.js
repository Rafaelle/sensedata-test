import { actionsTypes, financiesType } from '../constants/financies';

// localstorage
const INITIAL_STATE = {
  financies: [],
  total:0,
  totalEntries:0,
  totalExits:0
};

const reducers = (state = INITIAL_STATE, action) => {
  let financies;

  const calculateTotal = (financies) =>{
    return financies?.reduce((acc, f)=> acc+f.value, 0);
  }

  const calculateEntries= (financies) =>{

    financies.filter(f=>{
      return f.type===financiesType.Entrie})
    .reduce((acc, f)=> acc+f.value, 0)
  }

  const calculateExists= (financies) =>{
    financies.filter(f=>f.type===financiesType.Exit)
    .reduce((acc, f)=> acc+f.value, 0)
  }


  switch (action.type) {
    case actionsTypes.ADD_FINANCE:
      financies = [...state.financies, { ...action.payload }]
      return { 
        financies: financies,
        total:calculateTotal(financies), 
        totalEntries:calculateEntries(financies),
        totalExits:calculateExists(financies)
      };
    case actionsTypes.REMOVE_FINANCE:
      financies = state.financies.filter(x => x.id !== action.payload.id);
      return { 
        financies: financies,
        total:calculateTotal(financies), 
        totalEntries:calculateEntries(financies),
        totalExits:calculateExists(financies)
      };
    default:
      return state;
  }
};

export { reducers };
