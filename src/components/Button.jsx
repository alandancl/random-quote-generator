import React from 'react'

const Button = ( {generateQuoteButton, randomColor} ) => {

    const btnStyle = {
        backgroundColor: randomColor
    }

  return (
    <button onClick={generateQuoteButton} className='btn' style={btnStyle}>&#62;</button>
  )
}

export default Button