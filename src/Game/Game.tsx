import * as React from 'react';
import {Card} from '../Card/Card';
import './Game.css';

export type CardStack = string[]; // card stack is an array of image URLs

export interface IGameState {
  stack: CardStack;
}

export class Game extends React.Component<any, IGameState> {
  state: IGameState = {
    stack: [
      'https://picsum.photos/id/1003/1181/1772',
      'https://picsum.photos/id/1002/1181/1772',
      'https://picsum.photos/id/1003/1181/1772',
      'https://picsum.photos/id/1002/1181/1772']
  };

  render() {
    const {stack} = this.state;
    return (
      <div className="game">
        {stack.map((image, i) =>
          <Card index={i} image={image}
              onFlip={() => null} isFlipped={true}/>
        )}
      </div>
    );
  }
}
