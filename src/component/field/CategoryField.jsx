import React from 'react';
import { Field } from './Field';
import { fiancesCategories} from '../../constants/financies';

export const CategoryField = ({props}) => {

    return (
        
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
    )

}

