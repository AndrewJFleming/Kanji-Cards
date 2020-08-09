import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
      <div className="card">
        <div className="front">
            <div className="image-container">
              <img src={props.imageSrc}/>
            </div>
            <div className="english">{props.eng}</div>
        </div>
        <div className="back">
            <div className="kanji">{props.kanji}</div>
            <div className="romanji">{props.romanji}</div>
        </div>
      </div>
    </div>
)

export default Card;