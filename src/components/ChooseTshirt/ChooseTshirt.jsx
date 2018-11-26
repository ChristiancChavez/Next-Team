import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shirt from './Shirt/Shirt';
import colors from '../../Library/Colors';
import arrowLeft from '../../images/arrow-left.png';
import arrowRight from '../../images/arrow-right.png';
import './ChooseTshirt.scss';

class ChooseTshirt extends Component {
    state = {
      shirtPosition: 0,
    }

    defaultListShirt = () => {
      const { shirtPosition } = this.state;
      const { handlerChangeColorShirt } = this.props;

      return colors[shirtPosition].map(
        color => (
          <Shirt
            fill={color}
            key={color}
            handlerChangeColorShirt={handlerChangeColorShirt}
          />
        ),
      );
    };

    moveRightShirtPositionColors = () => {
      const { shirtPosition } = this.state;
      if (shirtPosition === colors.length - 1) {
        this.setState({
          shirtPosition: 0,
        });
      } else {
        this.setState({
          shirtPosition: shirtPosition + 1,
        });
      }
    };

    moveLeftShirtPositionColors = () => {
      const { shirtPosition } = this.state;
      if (shirtPosition === 0) {
        this.setState({
          shirtPosition: colors.length - 1,
        });
      } else {
        this.setState({
          shirtPosition: shirtPosition - 1,
        });
      }
    };

    render() {
      return (
        <div className="chooseContainer">
          <button className="button" type="button" onClick={this.moveLeftShirtPositionColors}>
            <img className="button__arrow" src={arrowLeft} alt="anteriores camisetas" />
          </button>
          <span className="options">
            {this.defaultListShirt()}
          </span>
          <button className="button" type="button" onClick={this.moveRightShirtPositionColors}>
            <img className="button__arrow" src={arrowRight} alt="próximas camisetas" />
          </button>
        </div>
      );
    }
}

export default ChooseTshirt;

ChooseTshirt.propTypes = {
  handlerChangeColorShirt: PropTypes.func.isRequired,
};
