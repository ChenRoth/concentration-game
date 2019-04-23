import * as React from 'react';
import {Card} from '../Card/Card';
import './Game.css';
import shuffle from 'lodash.shuffle';

export type CardStack = string[]; // card stack is an array of image URLs

export interface IGameState {
  points: number;
  stack: CardStack;
  flippedCards: Record<number, boolean>;
  currentFlippedCards: number[];
}


const images = [
  'https://picsum.photos/id/0/200/280',
  'https://picsum.photos/id/1/200/280',
  'https://picsum.photos/id/2/200/280',
  'https://picsum.photos/id/3/200/280',
  'https://picsum.photos/id/4/200/280',
  'https://picsum.photos/id/5/200/280',
  'https://picsum.photos/id/6/200/280',
  'https://picsum.photos/id/7/200/280',
  'https://picsum.photos/id/8/200/280',
  'https://picsum.photos/id/9/200/280',
  'https://picsum.photos/id/10/200/280',
];

export class Game extends React.Component<any, IGameState> {

  constructor(props: any) {
    super(props);

    const cards = images.reduce((cards: string[], image: string) => cards.concat([image, image]), []);
    const stack = shuffle(cards);

    this.state = {
      points: 0,
      stack,
      flippedCards: {},
      currentFlippedCards: [],
    };
  }

  flipCard = (index: number) => {
    const {currentFlippedCards} = this.state;
    if (currentFlippedCards.length === 2) {
      return;
    }

    this.setState({currentFlippedCards: currentFlippedCards.concat(index)}, () => {
      if (this.state.currentFlippedCards.length < 2) {
        return;
      }
      setTimeout(this.compareCards, 1000);
    });
  };

  compareCards = () => {
    const [firstCardIndex, secondCardIndex] = this.state.currentFlippedCards;

    // check if cards match
    if (this.state.stack[firstCardIndex] === this.state.stack[secondCardIndex]) {
      const newFlippedCards = {
        [firstCardIndex]: true,
        [secondCardIndex]: true,
      };
      // cards match, add them to flippedCards collection
      this.setState({
        currentFlippedCards: [],
        flippedCards: Object.assign(this.state.flippedCards, newFlippedCards),
        points: this.state.points + 1,
      });
    } else {
      // cards don't match
      this.setState({
        currentFlippedCards: []
      });
    }
  };

  render() {
    const {stack, points, flippedCards, currentFlippedCards} = this.state;
    return (
      <div className="game">
        <div className="points">Points: {points}</div>
        {points === stack.length / 2 ? <div className="game-over">GAME OVER!</div> : null}
        <div className="cards">
          {stack.map((image, i) =>
            <Card
              key={i}
              index={i} image={image}
              onFlip={this.flipCard}
              isFlipped={flippedCards[i] || currentFlippedCards.includes(i)}/>
          )}
        </div>
      </div>
    );
  }
}
