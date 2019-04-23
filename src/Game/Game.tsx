import * as React from 'react';
import {Card} from '../Card/Card';
import './Game.css';

export type CardStack = string[]; // card stack is an array of image URLs

export interface IGameState {
  stack: CardStack;
  flippedCards: Record<number, boolean>;
  currentFlippedCards: number[];
}

export class Game extends React.Component<any, IGameState> {
  state: IGameState = {
    stack: [
      'https://picsum.photos/id/1003/1181/1772',
      'https://picsum.photos/id/1002/1181/1772',
      'https://picsum.photos/id/1003/1181/1772',
      'https://picsum.photos/id/1002/1181/1772'],
    flippedCards: {
      0: true,
      2: true,
    },
    currentFlippedCards: [],
  };

  flipCard = (index: number) => this.setState({currentFlippedCards: this.state.currentFlippedCards.concat(index)});

  render() {
    const {stack, flippedCards, currentFlippedCards} = this.state;
    return (
      <div className="game">
        {stack.map((image, i) =>
          <Card
            key={i}
            index={i} image={image}
            onFlip={this.flipCard}
            isFlipped={flippedCards[i] || currentFlippedCards.includes(i)}/>
        )}
      </div>
    );
  }
}
