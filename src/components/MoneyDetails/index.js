// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {incomeAmount, expensesAmount} = moneyDetails
  console.log(props)

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="your-balance">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs. {parseInt(incomeAmount) - parseInt(expensesAmount)}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="your-balance">Your Income</p>
          <p data-testid="incomeAmount" className="amount">
            Rs. {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="your-balance">Your Expenses</p>
          <p data-testid="expensesAmount" className="amount">
            Rs. {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
