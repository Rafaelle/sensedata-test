import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../actions/financies.action';

export const TableRow = ({finance}) =>{
    const dispatch = useDispatch();

    return(
        <tr>
            
            <td>
                {finance.id.toString()}
            </td>
            <td>
                {finance.title}
            </td>
            <td>
                {finance.type}
            </td>
            <td>
                {finance.category}
            </td>
            <td>
                {finance.value}
            </td>
            <td>
                {finance.date.toString()}
            </td>
            <td>
                <button onClick={() => dispatch(actions.remove(finance))}>&times;</button>
            </td>

        </tr>
    )

}