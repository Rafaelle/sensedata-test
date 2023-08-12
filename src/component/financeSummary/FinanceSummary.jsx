import React from "react";
import { useSelector } from 'react-redux';


export const FinanceSummary = () =>{
    const {total, totalEntries,totalExits} = useSelector(state => state.financiesReducers);
    console.log(total, totalEntries, totalExits)

    return (
        <div>
            <div>
                Entradas: R${totalEntries}
            </div>

            <div>
                Saídas: R${totalExits}
            </div>

            <div>
                TOTAL: R${total}
            </div>
        </div>
    )
}