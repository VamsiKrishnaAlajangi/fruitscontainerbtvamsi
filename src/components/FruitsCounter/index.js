import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onEatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-counter-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes{' '}
            <span className="count">{bananaCount}</span> bananas{' '}
          </h1>
          <div className="counter-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.onEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.onEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
