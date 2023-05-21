// Write your code here.

import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="nav-container">
      <div className="emoji">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="game-score-card">Score: {currentScore}</p>
          <p className="game-score-card">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
