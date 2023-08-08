import React from 'react'
import Card from '../UI/Card'
import '../Expances/Expense.css'
import Button from '../UI/Button'
const NewExpanceToggler = (props) => {
  return (
    <Card className="expenses">
     <Button method={props.onhandle} type={"submit"} name={"Add New Expence"}/>
    </Card>
  )
}

export default NewExpanceToggler