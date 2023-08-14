import React from 'react';
import { Field } from './Field';

export const ValueField = ({props}) => {

    return (
        
        <Field
        type="number"
        id="value"
        name="value"
        label="Valor"
        onChange={props?.handleChange}

    />

    )

}

