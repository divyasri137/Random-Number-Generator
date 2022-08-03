// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onClickButton = () => {
    const newNum = Math.ceil(Math.random() * 100)
    this.setState({number: newNum})
  }

  render() {
    const {number} = this.state
    return (
      <div className="container">
        <div className="container2">
          <h1 className="heading">Random Number</h1>
          <p className="desc">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.onClickButton}>
            Generate
          </button>
          <p className="num">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
