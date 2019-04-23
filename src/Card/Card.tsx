import * as React from 'react';
import './Card.css';

export interface ICardProps {
  index: number;
  image: string;
  onFlip: (index: number) => void;
  isFlipped: boolean;
}

const back = '/card-back.png';

export class Card extends React.Component<ICardProps> {
  render() {
    const {image, onFlip, isFlipped, index} = this.props;
    return (
      <div className="card" onClick={() => onFlip(index)} style={{backgroundImage: `url(${isFlipped ? image : back})`}}>
      </div>
    );
  }
}
