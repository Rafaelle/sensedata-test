import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik} from 'formik';
import { actions as actionsFinance } from '../../actions/financies.action';
import { useField } from 'formik';
import './FinanceSheet.css'

import { financiesType, fiancesCategories, validation } from '../../constants/financies';

const EditableRow = ({ finance, columns, onCancel }) => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {

        dispatch(actionsFinance.edit(values));


        onCancel(); // Close the edit mode
    };

    const formik = useFormik({
        validationSchema: validation,
        initialValues: finance,
        onSubmit: handleSubmit,
    });



    const fields = (c, props) => {

        let component = null;

        switch (c) {
            case 'id':
                component = finance[c];
                break;
            case 'date':
                component = finance[c].toString();
                break;
            case 'title':

                component =(<> <input
                    type="text"
                    id="title"
                    name="title"
                    label="Título"
                    value={formik.values[c]}
                    onChange={formik.handleChange}
                />
                {props.errors && props.touched ? (
                    <div className="invalid-feedback">{props.errors[c]}</div>
                ) : null}
                </>
                )
                break;
            case 'type':
                component = <><select
                    type="select"
                    id="type"
                    name="type"
                    label="Tipo"
                    value={formik.values[c]}
                    onChange={formik.handleChange}
                >
                    <option value=''>Tipo</option>
                    {Object.values(financiesType).map((type, index) => (
                        <option key={index} value={type}>{type}</option>

                    ))}

                </select>
                
                {props.errors && props.touched ? (
                    <div className="invalid-feedback">{props.errors[c]}</div>
                ) : null}
                </>
                break;
            case 'category':
                component = <>
                    <select
                        type="select"
                        id="category"
                        name="category"
                        label="Categoria"
                        value={formik.values[c]}
                        onChange={formik.handleChange}
                    >

                        <option value=''>Categoria</option>
                        {Object.values(fiancesCategories).map((type, index) => (
                            <option key={index} value={type}>{type}</option>

                        ))}

                    </select>
                    {props.errors && props.touched ? (
                    <div className="invalid-feedback">{props.errors[c]}</div>
                ) : null}
                </>
                break;
            case 'value':
                component = <><input
                    min='0'
                    type="number"
                    id="value"
                    name="value"
                    label="Valor"
                    value={formik.values[c]}
                    onChange={formik.handleChange}
                />
                {props.errors && props.touched ? (
                    <div className="invalid-feedback">{props.errors[c]}</div>
                ) : null}
                </>
                break;
            default:
                break;
        }

        return component
    }

    return (
        <tr>


            {columns.map((c, index) => (
                <td key={index}>
                    {fields(c, formik)}
                </td>
            ))}



            <td  className='actions-btn'>
                <button className='btn' type="submit" onClick={formik.handleSubmit}>Salvar</button>
                <button className='btn' type="button" onClick={onCancel}>Cancelar</button>
            </td>
        </tr>
    );
};

export default EditableRow;