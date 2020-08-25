import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
  super(props);
  this.state = {
    flipped: true,
  }

  this.handleCardFlip = this.handleCardFlip.bind(this);
  }
  
  handleCardFlip = () => {
    this.setState({
      flipped: !this.state.flipped,
  });
  }

  render() {
    return(
      <div className="card-container">
          <div onClick={() => this.handleCardFlip()} className={this.state.flipped ? "card" : "card is-flipped"}>
            <div className="card__face card__face--front">
                <div className="image-container">
                  <img src={this.props.imageSrc}/>
                </div>
                <div className="english">{this.props.eng}</div>
            </div>
            <div className="card__face card__face--back">
                <div className="kanji">{this.props.kanji}</div>
                <div className="romanji">{this.props.romanji}</div>
            </div>
          </div>
        </div>
    )
  }
}

export default Card;

// const Card = (props) => (
//   <div className="card-container">
//     <div className="card">
//       <div className="front">
//           <div className="image-container">
//             <img src={props.imageSrc}/>
//           </div>
//           <div className="english">{props.eng}</div>
//       </div>
//       <div className="back">
//           <div className="kanji">{props.kanji}</div>
//           <div className="romanji">{props.romanji}</div>
//       </div>
//     </div>
//   </div>
// )
