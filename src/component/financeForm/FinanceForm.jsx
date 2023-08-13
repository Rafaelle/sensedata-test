import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions as actionsFinance } from '../../actions/financies.action';
import { Formik, useField } from 'formik';
import {validation } from '../../constants/financies';

import { Field } from '../field/Field';
import { TitleField } from '../field/TitleField';
import { TypeField } from '../field/TypeField';
import { CategoryField} from '../field/CategoryField';
import { ValueField } from '../field/ValueField';


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
                   <TitleField props={props}></TitleField>
                   <TypeField props={props}></TypeField>
                   <CategoryField props={props}></CategoryField>
                   <ValueField  props={props}></ValueField>

                    <button type='reset' onClick={props.handleReset}>Limpar</button>
                    <button type="submit" disabled={!(props.isValid && props.dirty)} >Adicionar</button>
                </form>
            )}
        </Formik>
    )

}