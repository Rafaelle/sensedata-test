import React from 'react';
import { useDispatch } from 'react-redux';
import { actions as actionsFinance } from '../../actions/financies.action';
import { Formik } from 'formik';
import {validation } from '../../constants/financies';

import { TitleField } from '../field/TitleField';
import { TypeField } from '../field/TypeField';
import { CategoryField} from '../field/CategoryField';
import { ValueField } from '../field/ValueField';

import './Financeform.css'


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
            id: new Date().toISOString(),
            title: values.title,
            type: values.type,
            category: values.category,
            value: values.value,
            date: new Date().toISOString()
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
                    <div className='formRow'>
                   <TitleField props={props}></TitleField>
                   <ValueField  props={props}></ValueField>

                    </div>
                    <div className='formRow'>

                   <TypeField props={props}></TypeField>
                   <CategoryField props={props}></CategoryField>

                    </div>

                    <button type='reset' onClick={props.handleReset}>Limpar</button>
                    <button type="submit" disabled={!(props.isValid && props.dirty)} >Adicionar</button>
                </form>
            )}
        </Formik>
    )

}