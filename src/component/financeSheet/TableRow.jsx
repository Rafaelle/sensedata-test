import React from 'react';
import { actions } from '../../actions/financies.action';

export const TableRow = ({ finance, columns}) => {

    return (
        <>
            {columns.map((c, index) => (
                <td key={index}>
                    {c === 'date' || c === 'id' ?
                        finance[c].toString() :
                        finance[c]}
                </td>
            ))}


        </>

    )










}