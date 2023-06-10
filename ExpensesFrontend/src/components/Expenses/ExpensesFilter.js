import './ExpensesFilter.css';

const currentYear = new Date().getFullYear().toString();
const startYear = ((+currentYear) - (5)).toString();
const filterYear = [];
for(let year=(+currentYear); year>=(+startYear); year--) {
  filterYear.push(year.toString());
}

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
		const selectedYear = event.target.value;
		props.onChangeFilter(selectedYear);
	}  

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {filterYear.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;