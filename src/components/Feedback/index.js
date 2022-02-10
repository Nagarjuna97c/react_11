import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {clicked: false}

  changeCard = () => {
    console.log('clicked')
    this.setState({clicked: true})
  }

  feedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                type="button"
                className="button"
                onClick={this.changeCard}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="image"
                />
                <br />
                <span className="name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  response = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="response-container">
        <img src={loveEmojiUrl} alt="love emoji" className="image1" />
        <br />
        <h1 className="heading">Thank You!</h1>
        <p className="para">
          We will use you feedback to improve customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {clicked} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          {clicked ? this.response() : this.feedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
