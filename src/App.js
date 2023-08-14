import logo from './logo.svg';
import './App.css';
import { FinanceForm } from './component/financeForm/FinanceForm';
import { FinanceSheet } from './component/financeSheet/FinanceSheet';
import { FinanceSummary } from './component/financeSummary/FinanceSummary';




function App() {
  return (
    <div className="App">
      <h2 className='header'>
       SenFinança <span> versão 1.0</span>
      </h2>
      <div className='main'>

        <FinanceSummary></FinanceSummary>
        <FinanceForm ></FinanceForm>
        <FinanceSheet ></FinanceSheet>
      </div>
    </div>
  );
}

export default App;
