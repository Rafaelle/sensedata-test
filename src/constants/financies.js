import * as yup from 'yup';


const actionsTypes = {
  ADD_FINANCE: 'ADD_FINANCE',
  REMOVE_FINANCE: 'REMOVE_FINANCE',
  FILTER_FINANCE: 'FILTER_FINANCE',
  EDIT_FINANCE: 'EDIT_FINANCE'
};

const financiesType = {
  Entrie: 'Entrada',
  Exit: 'Saída'
}

const fiancesCategories = {
  food: 'Alimentação',
  home:'Casa',
  bill: 'Conta',
  study:'Estudo',
  investiment:'Investimento',
  leisure: 'Lazer',
  health: 'Saúde',
  job: 'Trabalho',
  transport: 'Transporte',
  trip: 'Viagem',
  other: 'Outro',
}

const validation = yup.object({
  title: yup
      .string()
      .required('O nome é obrigatório'),
  type: yup
      .string()
      .required('O tipo é obrigatório'),
  category: yup
      .string()
      .required('A categoria é obrigatório'),
  value: yup
      .number()
      .required('O valor é obrigatório')
      .min(0, 'O valor deve ser maior que 0')
});

export { actionsTypes, financiesType, fiancesCategories, validation};
