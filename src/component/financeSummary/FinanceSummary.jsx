import React from "react";
import { useSelector } from 'react-redux';
import './FinanceSummary.css';


export const FinanceSummary = () => {
    const { totalFinances } = useSelector(state => state.financiesReducers);

    return (
        <div className="summary">
            <div className="total">
                TOTAL: R${totalFinances.total}
            </div>
            <div className="in">
                Entradas: R${totalFinances.totalEntries}
            </div>

            <div className="out">
                Saídas: R${totalFinances.totalExits}
            </div>


        </div>
    )
}