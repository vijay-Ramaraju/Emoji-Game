// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiName, id, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="list-emojis">
      <button onClick={onClickEmoji} type="button" className="button-emoji">
        <img src={emojiUrl} alt={emojiName} className="emoji-style" />
      </button>
    </li>
  )
}
export default EmojiCard
