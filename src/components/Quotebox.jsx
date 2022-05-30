import React, { useState } from 'react'
import Button from './Button'

const Quotebox = ( {randomQuote, generateQuoteButton, randomColor} ) => {

    const textStyle = {
        color: randomColor
    }

  return (
    <article className='box'>
        <p className='quotationMark' style={textStyle}>&#8220;</p>
        <p className='quote' style={textStyle}>{randomQuote.quote}</p>
        <p className='author' style={textStyle}><b>- {randomQuote.author}</b></p>
        <Button 
            generateQuoteButton={generateQuoteButton}
            randomColor={randomColor}
        />
    </article>
  )
}

export default Quotebox