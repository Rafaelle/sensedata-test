import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions as actionsFinance } from '../../actions/financies.action';
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import { fiancesCategories, financiesType } from '../../constants/financies';

import { Field } from '../field/Field';

//https://www.youtube.com/watch?v=BqVH9Z_6p38
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

export const FinanceForm = () => {

    const initialValues = () => {
        return { title: '', type: '', category: '', value: '' }
    }
/*
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);
*/
    const dispatch = useDispatch();

    const addFinance = (values, { resetForm }) => {
        const finance = {
            id: new Date(),
            title: values.title,
            type: values.type,
            category: values.category,
            value: values.value,
            date: new Date()
        };
        dispatch(actionsFinance.add(finance));
        resetForm({ values: initialValues() });
    }



    return (
        <Formik
            initialValues={initialValues()}
            validationSchema={validation}

            onSubmit={addFinance}
        >
            {(props) => (

                <form onSubmit={props.handleSubmit}>
                    <Field
                        type="text"
                        id="title"
                        name="title"
                        label="Título"
                        onChange={props.handleChange}
                    />

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

             

                    <Field
                        type="number"
                        id="value"
                        name="value"
                        label="Valor"
                        onChange={props.handleChange}

                    />

                    <button type='reset' onClick={props.handleReset}>Limpar</button>
                    <button type="submit" disabled={!(props.isValid && props.dirty)} >Adicionar</button>
                </form>
            )}
        </Formik>
    )

}