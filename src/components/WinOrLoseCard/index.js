// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {isWon, oncClickPlayAgain, score} = props
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-main-container">
      <div className="win-sub-container">
        <div>
          <h1 className="win-card-heading">{gameStatus}</h1>
          <p className="score-text">{scoreLabel}</p>
          <p className="final-score-style">{score}/12</p>
          <div className="button-container">
            <button
              className="win-card-button"
              onClick={oncClickPlayAgain}
              type="button"
            >
              Play Again
            </button>
          </div>
        </div>
        <div className="result-img">
          <img src={imgUrl} alt="win or lose" />
        </div>
      </div>
    </div>
  )
}
export default WinOrLoseCard
