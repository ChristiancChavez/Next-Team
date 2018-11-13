import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shirt from './Shirt/Shirt';
import colors from '../../Library/Colors';
import arrowLeft from '../../images/arrow-left.png';
import arrowRight from '../../images/arrow-right.png';
import './ChooseTshirt.scss';

class ChooseTshirt extends Component {
    // TO DO: change the name "shirtArray" for an specific thing
    state = {
      shirtArray: 0,
    }

    defaultListShirt = () => {
      const { shirtArray } = this.state;
      const { handlerChangeColorShirt } = this.props;

      return colors[shirtArray].map(
        color => (
          <Shirt
            fill={color}
            key={color}
            handlerChangeColorShirt={handlerChangeColorShirt}
          />
        ),
      );
    };

    moveRightshirtArrayColors = () => {
      const { shirtArray } = this.state;
      if (shirtArray === colors.length - 1) {
        this.setState({
          shirtArray: 0,
        });
      } else {
        this.setState({
          shirtArray: shirtArray + 1,
        });
      }
    };

    moveLeftshirtArrayColors = () => {
      const { shirtArray } = this.state;
      if (shirtArray === 0) {
        this.setState({
          shirtArray: colors.length - 1,
        });
      } else {
        this.setState({
          shirtArray: shirtArray - 1,
        });
      }
    };

    render() {
      return (
        <div className="container">
          <button type="button" onClick={this.moveLeftshirtArrayColors}>
            <img className="arrow-left" src={arrowLeft} alt="anteriores camisetas" />
          </button>
          <button type="button" onClick={this.moveRightshirtArrayColors}>
            <img className="arrow-right" src={arrowRight} alt="próximas camisetas" />
          </button>
          <span className="options">
            {this.defaultListShirt()}
          </span>
        </div>
      );
    }
}

export default ChooseTshirt;

ChooseTshirt.propTypes = {
  handlerChangeColorShirt: PropTypes.func.isRequired,
};
