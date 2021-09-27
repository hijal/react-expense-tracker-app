import { useState } from 'react';

import AddNewExpense from './components/AddExpense/AddNewExpense';
import Expenses from './components/Expenses/Expenses';

const INITIAL_EXPENSES = [
  {
    id: 'a1',
    title: 'First expense',
    amount: 100,
    date: new Date(2021, 4, 1),
  },
  {
    id: 'a2',
    title: 'Second expense',
    amount: 110,
    date: new Date(2021, 4, 8),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addNewExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div className="App">
      <AddNewExpense onAddExpense={addNewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
