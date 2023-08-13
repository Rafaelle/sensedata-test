import React from 'react';
import { Field } from './Field';
import {financiesType} from '../../constants/financies';

export const TypeField = ({props}) => {

    return (
       
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
    )

}

