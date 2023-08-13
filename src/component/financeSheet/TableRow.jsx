import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../actions/financies.action';
import * as yup from 'yup';








export const TableRow = ({ finance, columns, edit=false }) => {
    const dispatch = useDispatch();

    return (
        <tr>
            {columns.map((c, index )=> (
                <td key={index}>
                    {c == 'date' || c == 'id' ?
                        finance[c].toString() :
                        finance[c]}
                </td>
            ))}


            <td>
                <button onClick={() => dispatch(actions.remove(finance))}>&times;</button>
            </td>

        </tr>
    )

}