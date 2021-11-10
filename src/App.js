import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Toyota', amount: 294.67, date: new Date(2021, 2, 28)},
    { id: 'e2', title: 'Lexus', amount: 989.31, date: new Date(2020, 5, 15)},
    { id: 'e3', title: 'Audi', amount: 345.23, date: new Date(2021, 8, 9)},
    { id: 'e4', title: 'BMW', amount: 122.35, date: new Date(2021, 11, 20)},
  ];

  // return React.createElement(
  //   'div',
  //   {}, 
  //   React.createElement('h2', {}, 'Let\'s get started!' ),
  //   React.createElement(Expenses, {items: expenses})
  // );

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
