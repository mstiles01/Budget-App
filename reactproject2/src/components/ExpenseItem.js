import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'

export const ExpenseItem = ({expense}) => {
    const {id, charge, amount} = expense
    return ( <li className="Item">

<div className="info">
    <span className="expense">{charge}</span>
    <span className="amount">${amount}</span>
</div>
<div>
    <button className="edit-btn" aria-label='Edit Button'>
        <MdEdit/>
    </button>
    <button className="clear-btn" aria-label='Delete Button'>
        <MdDelete/>
    </button>
</div>
    </li>
        
    );
};
export default ExpenseItem;