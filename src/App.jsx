import { useState } from 'react'
import './App.css'
import Quotebox from './components/Quotebox'
import quotes from './json/quotes.json'

//This array is outside the App function in order to prevent it renderizes every time a state is changed
const randomColors = [
  '#A93226',
  '#CB4335',
  '#884EA0',
  '#7D3C98',
  '#2471A3',
  '#2E86C1',
  '#17A589',
  '#138D75',
  '#229954',
  '#28B463',
  '#D4AC0D',
  '#D68910',
  '#CA6F1E',
  '#BA4A00',
  '#A6ACAF',
  '#839192',
  '#707B7C'
]

function App() {

  //Returns a random number from 0 to arr.length
  const generateRandomNumber = arr => {
    return Math.floor(Math.random() * arr.length);
  }

  //Returns a random quote/author object from quotes.json 
  const getRandomQuote = arr => {
    let index = generateRandomNumber(arr);
    return arr[index];
  }

  //Sets randomQuote a random quote/author objetc value 
  const [randomQuote, setRandomQuote] = useState(getRandomQuote(quotes))

  //Generates a random quote/color every time it is clicked
  const generateQuoteButton = () => {
    setRandomQuote(getRandomQuote(quotes))
    setRandomColor(getRandomColor(randomColors))
  }

  //Returns a random color
  const getRandomColor = arr => {
    let index = generateRandomNumber(arr)
    return arr[index]
  }

  //Sets randomQuote a hex-color value
  const [randomColor, setRandomColor] = useState(getRandomColor(randomColors))

  //Sets appStyle to an object that stores background color
  const appStyle = {
    backgroundColor: randomColor
  }

  return (
    <div className="App" style={appStyle}>
      <Quotebox 
        randomQuote={randomQuote}
        generateQuoteButton={generateQuoteButton}
        randomColor={randomColor}
      />
  
    </div>
  )
}

export default App
