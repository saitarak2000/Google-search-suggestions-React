// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {inputvalue: ''}

  inputChanged = event => {
    console.log(event.target.value)
    const data = event.target.value
    this.setState({inputvalue: data.toLowerCase()})
  }

  onClickchangevalue = (id, suggestion) => {
    console.log(`clicked a list item ${id}`)
    this.setState({inputvalue: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {inputvalue} = this.state
    const filteredlists = suggestionsList.filter(eachitem =>
      eachitem.suggestion.toLowerCase().includes(inputvalue),
    )
    return (
      <div className="main-container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="inputandsuggestions">
          <div className="inputandsearch">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.inputChanged}
              value={inputvalue}
            />
          </div>
          <ul className="suggestionsinlist">
            {filteredlists.map(eachitem => (
              <SuggestionItem
                onClickchangevalue={this.onClickchangevalue}
                eachitem={eachitem}
                key={eachitem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
