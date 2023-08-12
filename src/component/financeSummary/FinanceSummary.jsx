import React from "react";
import { useSelector } from 'react-redux';


export const FinanceSummary = () =>{
    const {totalFinances} = useSelector(state => state.financiesReducers);

    return (
        <div>
            <div>
                Entradas: R${totalFinances.totalEntries}
            </div>

            <div>
                Saídas: R${totalFinances.totalExits}
            </div>

            <div>
                TOTAL: R${totalFinances.total}
            </div>
        </div>
    )
}