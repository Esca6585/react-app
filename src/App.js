import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { id: 'e1', title: 'Toyota', amount: 294.67, date: new Date(2021, 2, 28)},
    { id: 'e2', title: 'Lexus', amount: 989.31, date: new Date(2020, 5, 15)},
    { id: 'e3', title: 'Audi', amount: 345.23, date: new Date(2021, 8, 9)},
    { id: 'e4', title: 'BMW', amount: 122.35, date: new Date(2021, 11, 20)},
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
