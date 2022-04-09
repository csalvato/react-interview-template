import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export function Page({ message, emoji, hasFeeling, onEmojiClick }) {
  const [enteredName, setEnteredName] = useState('')
  const [emojiAnimation, setEmojiAnimation] = useState('animate-bounce')

  function handleEmojiClick() {
    onEmojiClick && onEmojiClick(enteredName)
    setEmojiAnimation((previousAnimation) =>
      previousAnimation === 'animate-bounce' ? 'animate-spin' : 'animate-bounce'
    )
  }

  return (
    <div className="flex justify-center items-center h-screen bg-violet-200">
      <div
        className="rounded shadow-lg border-violet-600 border py-4 px-6 text-violet-600 font-bold flex flex-col items-center text-2xl bg-white"
        data-testid="card"
      >
        <p>
          {message} {enteredName || 'Interviewer'}
          {hasFeeling && '!'}
        </p>
        {emoji && (
          <button
            type="button"
            className={classNames([
              emojiAnimation,
              'text-6xl mt-6 mb-3 focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-300 rounded-full p-2',
            ])}
            data-testid="emoji"
            onClick={handleEmojiClick}
          >
            {emoji}
          </button>
        )}
        <input
          type="text"
          className="text-sm border rounded w-full py-2 px-3 leading-tight focus:ring focus:border-purple-500 focus:ring-purple-300 focus:ring-opacity-50  border-gray-300 mt-2 focus:outline-none"
          placeholder="Enter name"
          data-testid="name-input"
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
        />
      </div>
    </div>
  )
}

Page.defaultProps = {
  message: 'Hello',
  emoji: '👋',
  hasFeeling: false,
}

Page.propTypes = {
  message: PropTypes.string,
  emoji: PropTypes.string,
  onEmojiClick: PropTypes.func,
  hasFeeling: PropTypes.bool,
}

export default Page
