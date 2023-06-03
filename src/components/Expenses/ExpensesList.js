import ExpenseItem from './ExpenseItem';
import "./ExpensesList.css";

const ExpensesList = ({filteredExpeses}) => {

		if(filteredExpeses.length === 0) {
			return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
		}

    let expenseItemList = filteredExpeses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));

		return (
			<ul className='expenses-list'>
				{expenseItemList}
			</ul>
		);
    
};

export default ExpensesList;
