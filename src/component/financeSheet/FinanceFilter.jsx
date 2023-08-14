import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions as actionsFinance } from '../../actions/financies.action';
import { Formik, useField } from 'formik';
import { financiesType, fiancesCategories } from '../../constants/financies';

import { Field } from '../field/Field';
import './FinanceFilter.css'

export const FinanceFilter = () => {

    const initialValues = () => {
        return { type: '', category: '' }
    }
    /*
        const [type, setType] = useState('');
        const [category, setCategory] = useState('');
    */
    const dispatch = useDispatch();
    const filter = (values) => {
        dispatch(actionsFinance.filter(values.type, values.category));
    }

    return (
        <Formik
            initialValues={initialValues()}
            onSubmit={filter}
        >
            {(props) => (

                <form className='filter' onSubmit={props.handleSubmit}>
                    <Field
                        type="select"
                        id="type"
                        name="type"
                        label="Tipo"
                        onChange={props.handleChange}
                    >
                        <option value=''>Todos</option>
                        {Object.values(financiesType).map((type, index) => (
                            <option key={index} value={type}>{type}</option>

                        ))}
                    </Field>

                    <Field
                        type="select"
                        id="category"
                        name="category"
                        label="Categoria"
                        onChange={props.handleChange}
                    >

                        <option value=''>Todos</option>
                        {Object.values(fiancesCategories).map((type, index) => (
                            <option key={index} value={type}>{type}</option>

                        ))}


                    </Field>
                    <div className='filter-btn'>
                        <button type='reset' onClick={props.handleReset}>Limpar</button>
                        <button type="submit" >Filtrar</button>

                    </div>
                </form>
            )}
        </Formik>
    )

}