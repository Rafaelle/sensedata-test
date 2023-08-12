import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions as actionsFinance } from '../../actions/financies.action';
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import { financiesType } from '../../constants/financies';


const Field = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{label}</label>

            { props.type == 'select'? 
            <select
            {...field}
            {...props}
            className={meta.error && meta.touched ? 'is-invalid' : ''}
            >
                {props.children}
            </select>
            :
            <input
            {...field}
            {...props}
            className={meta.error && meta.touched ? 'is-invalid' : ''}
        />
            }

            {meta.error && meta.touched ? (
                <div className="invalid-feedback">{meta.error}</div>
            ) : null}
        </div>
    );
};


const esquema = yup.object({
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

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);

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
            validationSchema={esquema}

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
                        defaultValue={financiesType.Exit}
                    >
                        <option value={financiesType.Exit}>{financiesType.Exit}</option>
                        <option value={financiesType.Entrie} >{financiesType.Entrie}</option>


                    </Field>

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
                    <button type="submit" disabled={!(props.isValid && props.dirty)} >Adicionar</button>
                </form>
            )}
        </Formik>
    )

}