import React from 'react'
import {mdSend} from "react-icons/md"
export const ExpenseForm = () => {
    return <form>
<div className="form-center">
<div className="form-group">
    <label htmlFor="charge">Charge</label>
    <input type="text" className="form-control" 
    id="charge" 
    name="charge" 
    placeholder="e.g. Rent"></input>
</div>
</div>
    </form>;
}

export default ExpenseForm;