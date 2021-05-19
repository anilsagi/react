import React, {Component } from 'react';
import axios from 'axios';
import {Button, QuoteBox } from 'materialize-css'

class RandomQuote extends Component {
       state = {
          quote: '',
          author: ''
       }
 
    componentDidMount = () => {
       axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
          .then(res => {
              console.log(res.data);
             const data = res.data.quotes
             const quoteNum = Math.floor(Math.random() * data.length)
             const randomQuote = data[quoteNum]
             this.setState({
                quote: randomQuote['quote'],
                author: randomQuote['author']
             })
          }).catch((error) => {
            console.log('found an error')
        })
    }
 
    render() {
       const { quote, author } = this.state
       return (
          <div>
             <div>
                <QuoteBox quote={quote} author={author} /> 
                <div id='buttons'>
                   <Button id='new-quote' title='New Quote' onClick={this.getNewQuote} />
                </div>
             </div>
          </div>
       )
    }
 }
 export default RandomQuote;

