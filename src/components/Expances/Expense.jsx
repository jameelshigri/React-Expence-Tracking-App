import {useState} from 'react'
import Card from '../UI/Card';
import './Expense.css'
import ExpenseItem from './ExpenseItem';
import ExpancesFilter from './ExpancesFilter';
import ExpancesChart from './ExpancesChart';
const Expense = (props) => {
  const [selectedYear,setSelectedYear]=useState('All');
  const getFiltered=filteredData=>{
    setSelectedYear(filteredData);
  }
   let filteredExpance = props.expence.filter(item=>{return item.expanceDate.getFullYear().toString()===selectedYear});;
  // console.log(result);
  return (
    
    <Card className='expenses'>
        <ExpancesFilter onFiltered={getFiltered}/>
        
        { selectedYear==='All' && props.expence.map((item)=>
          <ExpenseItem key={item.id} expence={item}/>
          )}
          {
            filteredExpance.length === 0 ? <p style={{textAlign:'center', color:'red'}}>No Expence found!</p>
          :null
          }
          {
            filteredExpance.map((item)=>
            <ExpenseItem key={item.id} expence={item}/>
            )
          }
          <ExpancesChart expence={filteredExpance}/>
    </Card>
  )
}

export default Expense