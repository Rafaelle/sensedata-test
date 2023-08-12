import logo from './logo.svg';
import './App.css';
import { FinanceForm } from './component/financeForm/FinanceForm';
import { FinanceSheet } from './component/financeSheet/FinanceSheet';




function App() {
  return (
    <div className="App">
      <FinanceForm ></FinanceForm>
      <FinanceSheet ></FinanceSheet>
    </div>
  );
}

export default App;
