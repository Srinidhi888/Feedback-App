// Write your React code here.
import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {feed: true}

  onSub = () => {
    this.setState({feed: false})
  }

  feedbackForm = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <>
        <h1> How satisfied are you with our customer support performance?</h1>
        <ul className="grp">
          {emojis.map(each => (
            <li className="inner-grp" key={each.id}>
              <img
                className="icons"
                onClick={this.onSub}
                src={each.imageUrl}
                alt={each.name}
              />
              <p> {each.name}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }

  feedbackReply = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <>
        <img src={loveEmojiUrl} className="love" alt="love emoji" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </>
    )
  }

  render() {
    const {feed} = this.state
    return (
      <div className="bg">
        <div className="card">
          {feed ? this.feedbackForm() : this.feedbackReply()}
        </div>
      </div>
    )
  }
}

export default Feedback
