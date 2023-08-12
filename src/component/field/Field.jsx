import React from "react";
import { Formik, useField } from 'formik';


export const Field = ({ label, ...props }) => {
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
