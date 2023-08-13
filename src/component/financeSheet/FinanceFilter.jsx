import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions as actionsFinance } from '../../actions/financies.action';
import { Formik, useField } from 'formik';
import { financiesType,fiancesCategories } from '../../constants/financies';

import { Field } from '../field/Field';


export const FinanceFilter = () => {

    const initialValues = () => {
        return { type: '', category: '' }
    }

    const [type, setType] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();
    const filter = (values, { resetForm }) => {
        console.log(values)
        dispatch(actionsFinance.filter(values.type, values.category));
        resetForm({ values: initialValues() });
    }

    return (
        <Formik
            initialValues={initialValues()}
            onSubmit={filter}
        >
            {(props) => (

                <form onSubmit={props.handleSubmit}>
                    <Field
                        type="select"
                        id="type"
                        name="type"
                        label="Tipo"
                        onChange={props.handleChange}
                    >
                        <option value=''>Tipo</option>
                        {Object.values(financiesType).map((type, index)=>(
                            <option  key={index} value={type}>{type}</option>

                        ))}
                    </Field>

                    <Field
                        type="select"
                        id="category"
                        name="category"
                        label="Categoria"
                        onChange={props.handleChange}
                    >

                        <option value=''>Categoria</option>
                        {Object.values(fiancesCategories).map((type, index)=>(
                            <option  key={index} value={type}>{type}</option>

                        ))}


                    </Field>
                    <button type='reset' onClick={props.handleReset}>Limpar</button>
                    <button type="submit" >Filtrar</button>
                </form>
            )}
        </Formik>
    )

}