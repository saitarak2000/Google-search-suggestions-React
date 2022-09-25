// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachitem, onClickchangevalue} = props
  const {suggestion, id} = eachitem

  const addToInput = () => {
    onClickchangevalue(id, suggestion)
  }
  return (
    <li className="history">
      <p>{suggestion}</p>
      <img
        onClick={addToInput}
        className="arrowimg"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
