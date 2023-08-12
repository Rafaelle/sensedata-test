import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../actions/financies.action';

export const FinanceForm = () => {

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);
  
    const dispatch = useDispatch();
  

    const addFinance = event => {
        event.preventDefault();

        const finance = {
            id: new Date(),
            title,
            type,
            category,
            value,
            date: new Date()
          };
      
          dispatch(actions.add(finance));

          setTitle('');
          setType('');
          setCategory('');
          setValue(0);


    }

    return (
        <form onSubmit={addFinance}>
            <input
                type="text"
                name={title}
                placeholder="Título"
                required
            onChange={event => setTitle(event.target.value)}
            />

            <input
                type="text"
                name={type}
                placeholder="Tipo"
                required
            onChange={event => setType(event.target.value)}
            />

            <input
                type="text"
                name={category}
                placeholder="Categoria"
                required
            onChange={event => setCategory(event.target.value)}
            />


            <input
                type="number"
                name={value}
                placeholder="Valor"
                required
            onChange={event => setValue(event.target.value)}
            />

            <button type="submit">Adicionar</button>
        </form>
    )

}