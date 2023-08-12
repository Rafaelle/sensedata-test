import logo from './logo.svg';
import './App.css';
import { FinanceForm } from './component/financeForm/FinanceForm';
import { FinanceSheet } from './component/financeSheet/FinanceSheet';
import { FinanceSummary } from './component/financeSummary/FinanceSummary';




function App() {
  return (
    <div className="App">
      <FinanceForm ></FinanceForm>
      <FinanceSummary></FinanceSummary>
      <FinanceSheet ></FinanceSheet>
    </div>
  );
}

export default App;
