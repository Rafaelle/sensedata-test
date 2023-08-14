import React, { useState } from 'react';
import { tableHeader } from '../../constants/tableHeader';
import { TableRow } from './TableRow';
import { useSelector } from 'react-redux';
import { FinanceFilter } from './FinanceFilter';
import { useDispatch } from 'react-redux';
import { actions } from '../../actions/financies.action';
import EditableRow from './EditableRow';
import "./FinanceSheet.css";

export const FinanceSheet = () => {
    const { filteredFinancies, totalFiltered } = useSelector(state => state.financiesReducers);

    const dispatch = useDispatch();
    const [editingIndex, setEditingIndex] = useState(null);

    const handleEdit = (index) => {
        setEditingIndex(index);
    };


    const handleCancelEdit = () => {
        setEditingIndex(null);
    };



    return (
        <div className='finance-sheet'>

            <div className='filter'>
                <FinanceFilter></FinanceFilter>
            </div>

            <div className='div-table'>

            <table >
                <thead>
                    <tr>
                        {Object.values(tableHeader).map((th, index) => (
                            <th key={index}>{th}</th>
                        ))}
                        <th>Ações</th>
                    </tr>

                </thead>

                <tbody>
                    {filteredFinancies?.map((finance, index) => (


                        <React.Fragment key={index}>
                            {editingIndex === index ? (
                                <EditableRow
                                    finance={finance}
                                    onCancel={handleCancelEdit}
                                    columns={Object.keys(tableHeader)}
                                />
                            ) : (
                                <tr>
                                    <TableRow key={finance.id} finance={finance} columns={Object.keys(tableHeader)}></TableRow>
                                    <td className='actions-btn'>
                                        <button className='edit' onClick={() => handleEdit(index)}>Editar</button>
                                        <button className='remove' onClick={() => dispatch(actions.remove(finance))}>Remover</button>

                                    </td>
                                </tr>
                            )}


                        </React.Fragment>
                    ))}

                </tbody>

                {
                    totalFiltered ? <tfoot >
                        <tr>
                            <th scope="row">Total Parcial</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total: {totalFiltered.total}</td>
                            <td>Entradas: {totalFiltered.totalEntries}</td>

                            <td>Saídas: {totalFiltered.totalExits}</td>

                        </tr>
                    </tfoot> : null
                }

            </table>

            </div>

        </div>

    )
}