import React from 'react';
import { Field } from './Field';

export const TitleField = ({props}) => {

    return (
        <Field
            type="text"
            id="title"
            name="title"
            label="Título"
            onChange={props.handleChange}
        />
    )

}

