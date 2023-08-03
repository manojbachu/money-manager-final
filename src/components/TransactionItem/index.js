// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="list-item-titles">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type === 'INCOME' ? 'Income' : 'Expenses'}</p>
      <button data-testid="delete" onClick={onDelete} type="button">
        <img
          className="delete-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
