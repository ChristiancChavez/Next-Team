import React,  { Component } from 'react';
import Shirt from './Shirt/Shirt';
import colors from '../../Library/Colors';
import arrowLeft from '../../images/arrow-left.png';
import arrowRight from '../../images/arrow-right.png';
import './ChooseTshirt.scss';

class ChooseTshirt extends Component {

    state = {
        array: 0,
    }

    defaultListShirt = () => {
        return colors[this.state.array].map((color) => <Shirt fill={color} key={color} />);
    };

    moveRightArrayColors = () => {
        const { array } = this.state;
        if(array === colors.length - 1){
            this.setState({
                array : 0,
            })
        } else {
            this.setState({
                array: array + 1,
            })
        }
        
    };

    moveLeftArrayColors = () => {
        const { array } = this.state;
        if(array === 0){
            this.setState({
                array: colors.length - 1,
            })
        } else {
            this.setState({
                array: array - 1,
            })
        }
        
    };

    render(){
        return (
            <div className="container">
                <img className="arrow-left" src={arrowLeft} alt="anteriores camisetas" onClick={this.moveLeftArrayColors} />
                <img className="arrow-right" src={arrowRight} alt="próximas camisetas" onClick={this.moveRightArrayColors}/>
                <span className="options">
                    {this.defaultListShirt()}
                </span>
            </div>
        )
    }
}
export default ChooseTshirt;