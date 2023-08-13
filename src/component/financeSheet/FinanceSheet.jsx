import React from 'react';
import { tableHeader } from '../../constants/tableHeader';
import { TableRow } from './TableRow';
import { useSelector } from 'react-redux';
import { FinanceFilter } from './FinanceFilter';

export const FinanceSheet = () => {
    const {filteredFinancies} = useSelector(state => state.financiesReducers);


    return (
        <div>

            <div>
                <FinanceFilter></FinanceFilter>
            </div>
            <table>
                <thead>
                    <tr>
                        {Object.values(tableHeader).map((th, index) => (
                            <th key={index}>{th}</th>
                        ))}
                        <th>Ações</th>
                    </tr>

                </thead>

                <tbody>
                    {filteredFinancies?.map((finance, i) => (

                        <TableRow key={finance.id} finance={finance} columns={Object.keys(tableHeader)}></TableRow>
                    ))}

                </tbody>
            </table>
        </div>

    )
}