import React from "react";
import { useField } from 'formik';
import './Field.css'

export const Field = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
          <div>
              {label?
            <label htmlFor={props.id}>{label}</label>:null
            }

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
            </div>

            {meta.error && meta.touched ? (
                <div className="invalid-feedback">{meta.error}</div>
            ) : null}
        </div>
    );
};
