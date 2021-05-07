import React from 'react';
import './App.css';
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        quote: 'love u -anon',
        compliments: ['Sometimes you have valid opinions on stuff, I guess -Lu', 'You\'re my twin which makes you similar to me which makes you sort of very cool -Lu', 'I guess I appreciate you quite a bit cause I did make this whole thing for your birthday -Lu', 'I love you -Tabby', 'You\'re an amazing writer -Tabby', 'You\'re super nice and the prettiest girl in the world -Tabby', 'I love your evil AU brain and your love for ducks -Tabby', 'I could talk to you 24/7 and wouldn\'t get bored -Elena', 'You\'re the coolest grandma ever -Elena', 'You\'re getting kinda old but I guess that just makes you wiser? -Lu', 'Seeing I have new messages from you makes me happy -Elena', 'Your Circle opinions are very valid and I respect you more for them -Lu', 'I love your writing and your art, they spark joy -Elena', 'It took you like over a year but you finally finished watching awae!! yay!!! -Lu', 'You\'re like actually super nice and considerate ma\'am -Lu', 'You\'re beautiful inside and out!!!!! -Anon', 'You\'re very smart even when you don\'t think you are -Anon', 'You work so hard on everything you do   -Anon', 'You deserve all the nice things in the world -Lu', 'You didn\'t believe Taylor Swift was releasing a third album which makes you way smarter than us -Tabby and Lu', 'You knit really cool snakes -Anon', 'you’re SO PRETTY like WOW. incREDIBLY CUTE i want to squish you and carry you in my pocket all the time. soft gf energy -Léa', 'so funny you make me chuckle at my phone often. if you made a youtube channel i WOULD subscribe. also i love it when you hyperfixate on stuff and send me the more developed amazing takes on it your taste is impeccable -Léa', 'you’re smart and talented and your drawings and writing always spark so much joy, i can’t BELIEVE how fast you learned to draw i’m shook -Léa', 'your voice is so pretty that every time we spoke i went uwu. heart emoji sparkle sparkle. -Léa', 'Girlbos. Gatekeep. Gaslight. -Anon', 'your opinions on spider-man are always right and it’s sooo sexy when you infodump. go on about the funky little hobbit men please i love to hear about it -Léa', 'you’re like if sunshine was a person -Léa', 'you’re such a good friend, you genuinely care so much about people and want to be there for them and lift them up and it’s amazing. we haven’t been friends for a very long time and already you’re such an important person in my life dude for real -Léa', 'you deserve a sexy gf end tweet -Léa'],
     }
  }

  componentDidMount() {
     this.getQuote()
  }

  getNewQuote = () => {
     this.getQuote()
  }

  getQuote(){
   let quoteNum = Math.floor(Math.random() * this.state.compliments.length);
   let randomQuote = this.state.compliments[quoteNum];
   //console.log(randomQuote)
   //console.log(quoteNum)
    this.setState({
      quote: randomQuote
   })
  }

  render() {
     const { quote } = this.state
     return (
        <div id='wrapper'>
           <h1 className='title'>Ka's Birthday Compliment Machine</h1>

           <div id='quote-box'>
              <QuoteBox quote={quote} />

              <div id='buttons'>
                 <Button title='New Compliment' onClick={this.getNewQuote} />
              </div>
           </div>
        </div>
     )
  }
}

// Quote Box component
const QuoteBox = ({ quote }) => { //destructuring
  return (
     <React.Fragment>
        <div id='text'><p>{quote}</p></div>
     </React.Fragment>
  )
}

//Button component
const Button = ({ onClick, title }) => {
  return (
     <button className='button' id='new-quote' onClick={onClick}>{title}</button>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))


export default App;