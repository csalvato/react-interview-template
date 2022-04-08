import React from 'react'
import PropTypes from 'prop-types'

export function Page({ message, emoji, onClick }) {
  return (
    <div className="flex justify-center items-center h-screen bg-violet-200">
      <div
        className="rounded shadow-lg border-violet-600 border py-4 px-6 text-violet-600 font-bold hover:bg-gray-100 hover:text-violet-900 flex flex-col items-center text-2xl bg-white"
        data-testid="card"
        onClick={() => onClick && onClick(message)}
      >
        <p>{message}</p>
        <div className="animate-bounce text-6xl mt-10 mb-5">{emoji}</div>
      </div>
    </div>
  )
}

Page.defaultProps = {
  message: 'Hello Interviewer',
  emoji: '👋',
}

Page.propTypes = {
  message: PropTypes.string,
  emoji: PropTypes.string,
  onClick: PropTypes.func,
}

export default Page
