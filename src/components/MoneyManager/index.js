import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import './index.css'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    incomeAmount: 0,
    expensesAmount: 0,
    transactionList: [],
    inputTitle: '',
    inputAmount: '',
    transactionType: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({
      inputTitle: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      inputAmount: event.target.value,
    })
  }

  onChangeTransactionType = event => {
    this.setState({
      transactionType: event.target.value,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {inputTitle, inputAmount, transactionType} = this.state

    const newTransaction = {
      id: v4(),
      title: inputTitle,
      amount: inputAmount,
      type: transactionType,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      incomeAmount:
        newTransaction.type === 'INCOME'
          ? parseInt(prevState.incomeAmount) + parseInt(newTransaction.amount)
          : parseInt(prevState.incomeAmount) + 0,
      expensesAmount:
        newTransaction.type === 'EXPENSES'
          ? parseInt(prevState.expensesAmount) + parseInt(newTransaction.amount)
          : parseInt(prevState.expensesAmount) + 0,
      inputTitle: '',
      inputAmount: '',
      transactionType: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(
      eachTransaction => id !== eachTransaction.id,
    )
    const removeAmount = transactionList.find(
      eachTransaction => id === eachTransaction.id,
    )

    this.setState(prevState => ({
      transactionList: updatedTransactionList,
      incomeAmount:
        removeAmount.type === 'INCOME'
          ? parseInt(prevState.incomeAmount) - parseInt(removeAmount.amount)
          : parseInt(prevState.incomeAmount) - 0,
      expensesAmount:
        removeAmount.type === 'EXPENSES'
          ? parseInt(prevState.expensesAmount) - parseInt(removeAmount.amount)
          : parseInt(prevState.expensesAmount) - 0,
    }))
  }

  render() {
    const {
      inputTitle,
      inputAmount,
      transactionType,
      transactionList,
      incomeAmount,
      expensesAmount,
    } = this.state

    const moneyDetails = {incomeAmount, expensesAmount}

    return (
      <div className="money-manager-app-container">
        <div className="user-profile-container">
          <h1 className="user-name">
            Hi, <span className="name"> Richard </span>
          </h1>
          <p className="greetings">
            Welcome back to your{' '}
            <span className="money-manager">Money Manager</span>
          </p>
        </div>
        <MoneyDetails moneyDetails={moneyDetails} />
        <div className="add-transaction-with-history-container">
          <form className="form" onSubmit={this.onAddTransaction}>
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <label htmlFor="title" className="label">
              TITLE
            </label>
            <input
              id="title"
              type="text"
              className="input"
              placeholder="TITLE"
              onChange={this.onChangeTitle}
              value={inputTitle}
            />
            <label htmlFor="amount" className="label">
              AMOUNT
            </label>
            <input
              id="amount"
              type="text"
              className="input"
              placeholder="AMOUNT"
              onChange={this.onChangeAmount}
              value={inputAmount}
            />

            <label htmlFor="select" className="label">
              TYPE
            </label>
            <select
              value={transactionType}
              onChange={this.onChangeTransactionType}
              id="select"
              className="select"
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          <ul className="history-list-container">
            <h1 className="history-heading">History</h1>
            <li className="list-item-titles">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
              <p> </p>
            </li>
            {transactionList.map(eachTransaction => (
              <TransactionItem
                transactionDetails={eachTransaction}
                onDeleteTransaction={this.onDeleteTransaction}
                key={eachTransaction.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
