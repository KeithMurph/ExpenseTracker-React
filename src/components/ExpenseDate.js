// render expenses Date
import './ExpenseDate.css'


function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__day' >{day}</div>
      <div className='expense-date__month'>{year}</div>
      <div className='expense-date__year'>{month}</div>
    </div>
  );
}

export default ExpenseDate;
