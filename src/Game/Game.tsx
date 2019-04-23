import * as React from 'react';
import {Card} from '../Card/Card';

export interface IGameState {
  isCardFlipped: boolean;
}

export class Game extends React.Component<IGameState> {
  state: IGameState = {
    isCardFlipped: false,
  };

  render() {
    const {isCardFlipped} = this.state;
    return (
      <div>
        <Card index={0} image={'https://picsum.photos/id/1003/1181/1772'}
              onFlip={() => this.setState({isCardFlipped: true})} isFlipped={isCardFlipped}/>
      </div>
    );
  }
}
