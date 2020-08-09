import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

import data from './data/data.json';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

const clientId = process.env.REACT_APP_ACCESS_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: data.cards,
      currentCard: data.cards[0],
      imageSrc: ""
    }

    this.updateCard = this.updateCard.bind(this);
  }

  componentDidMount() {
    this.getimageSrc();
  }

  componentDidUpdate(prevProps, prevState) {
    if ( prevState.currentCard !== this.state.currentCard ) {
        this.getimageSrc();
      }
  }

  getimageSrc = () => {
    let searchTerm = this.state.currentCard.eng;
    let newURL = "https://api.unsplash.com/search/photos/?page=1&query=" + searchTerm + "&client_id=" + clientId;
    axios.get(newURL)
    .then(response => {
      this.setState({ 
        imageSrc: response.data.results[0].urls.small 
      });
    })
  }

  getRandomCard(currentCards) {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card);
  }

  updateCard() {
    let currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }
  
  render () {
    return (
      <div className="App">
          <h1>Kanji Cards</h1>
        <div className="cardRow">
          <Card 
            eng={this.state.currentCard.eng} 
            kanji={this.state.currentCard.kanji} 
            romanji={this.state.currentCard.romanji}
            imageSrc={this.state.imageSrc}
          />
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
        </div>
      </div>
    );
  }

}

export default App;
