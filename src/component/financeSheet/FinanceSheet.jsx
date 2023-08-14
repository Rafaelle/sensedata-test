import React, { useState } from 'react';
import { tableHeader } from '../../constants/tableHeader';
import { TableRow } from './TableRow';
import { useSelector } from 'react-redux';
import { FinanceFilter } from './FinanceFilter';
import { useDispatch } from 'react-redux';
import { actions } from '../../actions/financies.action';
import EditableRow from './EditableRow';

export const FinanceSheet = () => {
    const { filteredFinancies } = useSelector(state => state.financiesReducers);
    const dispatch = useDispatch();
    const [editingIndex, setEditingIndex] = useState(null);

    const handleEdit = (index) => {
        setEditingIndex(index);
    };


    const handleCancelEdit = () => {
        setEditingIndex(null);
    };



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
                                    <td>
                                        <button onClick={() => handleEdit(index)}>Editar</button>
                                        <button onClick={() => dispatch(actions.remove(finance))}>&times;</button>

                                    </td>
                                </tr>
                            )}
                        </React.Fragment>


                        /* <tr>
                             <TableRow key={finance.id} finance={finance} columns={Object.keys(tableHeader)}></TableRow>
 
                             <td>
                     <button onClick={() => handleEdit(i)}>Editar</button>
                     <button onClick={() => dispatch(actions.remove(finance))}>&times;</button>
                 </td>
                         </tr>*/

                        /* <TableRow key={finance.id} finance={finance} columns={Object.keys(tableHeader)}></TableRow>*/
                    ))}

                </tbody>
            </table>
        </div>

    )
}