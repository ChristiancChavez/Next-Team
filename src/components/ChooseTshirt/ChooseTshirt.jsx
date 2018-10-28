import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shirt from './Shirt/Shirt';
import colors from '../../Library/Colors';
import arrowLeft from '../../images/arrow-left.png';
import arrowRight from '../../images/arrow-right.png';
import './ChooseTshirt.scss';

class ChooseTshirt extends Component {
    // TO DO: change the name "array" for an specific thing
    state = {
      array: 0,
    }

    defaultListShirt = () => {
      const { array } = this.state;
      const { handlerChangeColorShirt } = this.props;

      return colors[array].map(
        color => (
          <Shirt
            fill={color}
            key={color}
            handlerChangeColorShirt={handlerChangeColorShirt}
          />
        ),
      );
    };

    moveRightArrayColors = () => {
      const { array } = this.state;
      if (array === colors.length - 1) {
        this.setState({
          array: 0,
        });
      } else {
        this.setState({
          array: array + 1,
        });
      }
    };

    moveLeftArrayColors = () => {
      const { array } = this.state;
      if (array === 0) {
        this.setState({
          array: colors.length - 1,
        });
      } else {
        this.setState({
          array: array - 1,
        });
      }
    };

    render() {
      return (
        <div className="container">
          <button type="button" onClick={this.moveLeftArrayColors}>
            <img className="arrow-left" src={arrowLeft} alt="anteriores camisetas" />
          </button>
          <button type="button" onClick={this.moveRightArrayColors}>
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
