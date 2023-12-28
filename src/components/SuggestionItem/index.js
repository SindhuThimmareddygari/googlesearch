// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, displaySuggestion} = props
  const {suggestion} = suggestionDetails

  const onSuggestion = () => {
    displaySuggestion(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion-text">{suggestion}</p>
      <button type="button" className="button" onClick={onSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
