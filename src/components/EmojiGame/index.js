/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {
    scoreData: 0,
    topScore: 0,
    clickEmojiList: [],
    isGameInProgress: true,
  }

  finishTheGameAndResult = score => {
    const {topScore} = this.state
    let newScore = topScore
    if (score > topScore) {
      newScore = score
    }
    this.setState({topScore: newScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickEmojiList} = this.state
    const isEmojiPresent = clickEmojiList.includes(id)
    const clickedEmojiLen = clickEmojiList.length

    if (isEmojiPresent) {
      this.finishTheGameAndResult(clickedEmojiLen)
    } else {
      if (emojisList.length - 1 === clickedEmojiLen) {
        this.finishTheGameAndResult(emojisList.length)
      }
      this.setState(prevState => ({
        clickEmojiList: [...prevState.clickEmojiList, id],
      }))
    }
  }

  resetGame = () => {
    this.setState({clickEmojiList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickEmojiList} = this.state
    const isWon = clickEmojiList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        oncClickPlayAgain={this.resetGame}
        score={clickEmojiList.length}
      />
    )
  }

  getshuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderList = () => {
    const shuffledEmojisList = this.getshuffledEmojisList()
    return (
      <ul className="emojis-list">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            clickEmoji={this.clickEmoji}
            emojiDetails={each}
            key={each.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {scoreData, topScore, clickEmojiList, isGameInProgress} = this.state
    const {emojisList} = this.props

    return (
      <div className="main-container">
        <NavBar
          currentScore={clickEmojiList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div>
          {isGameInProgress ? this.renderList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
