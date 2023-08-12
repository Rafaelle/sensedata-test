import React from 'react';
import { tableHeader } from '../../constants/tableHeader';
import { TableRow } from './TableRow';
import { useSelector } from 'react-redux';
  
export const FinanceSheet = () =>{
    const financies = useSelector(state => state.financiesReducers.financies);

   /* const financies = [
        {
          id:'#01',
          title:'Ifood',
          type:'Saída',
          category:'comida',
          value:50,
          data: new Date()
      },
      {
          id:'#02',
          title:'recebido',
          type:'Entrada',
          category:'outro',
          value:25,
          data: new Date()
      }
      ]
*/

    return (
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
                {financies.map((finance, i) =>(

                     <TableRow key={finance.id} finance={finance}></TableRow>
                ))}

            </tbody>
        </table>
      
    )
}