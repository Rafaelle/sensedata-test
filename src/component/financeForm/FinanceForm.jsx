import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions as actionsFinance } from '../../actions/financies.action';
import { Formik, useField } from 'formik';


const Field = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{label}</label>
            <input
                {...field}
                {...props}
                className={meta.error && meta.touched ? 'is-invalid' : ''}
            />
            {meta.error && meta.touched ? (
                <div className="invalid-feedback">{meta.error}</div>
            ) : null}
        </div>
    );
};

export const FinanceForm = () => {

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);


    
    const dispatch = useDispatch();


    const addFinance = (values, {resetForm}) => {

      
        const finance = {
            id: new Date(),
            title: values.title,
            type: values.type,
            category: values.category,
            value: values.value,
            date: new Date()
        };
        console.log(initialValues())
        
        dispatch(actionsFinance.add(finance));
        resetForm({values:initialValues()});
    }

    const initialValues = () => {
        return { title: '', type: '', category: '', value: '' }
    }

    return (
        <Formik
            initialValues={initialValues()}
            validate={(values) => {
                const errors = {};
                if (values.value < 0) {
                    errors.value = 'O valor deve ser um valor válido'
                }
            }}
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
                        type="text"
                        id="type"
                        name="type"
                        label="Tipo"
                        onChange={props.handleChange}

                    />

                    <Field
                        type="text"
                        id="category"
                        name="category"
                        label="Categoria"
                        onChange={props.handleChange}

                    />

                    <Field
                        type="number"
                        id="value"
                        name="value"
                        label="Valor"
                        onChange={props.handleChange}

                    />



                    <button type='reset' onClick={props.handleReset}>Limpar</button>
                    <button type="submit">Adicionar</button>
                </form>
            )}
        </Formik>
    )

}