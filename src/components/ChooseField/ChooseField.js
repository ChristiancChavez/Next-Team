import React, { Component } from 'react';
import soccerFieldCircle from '../../images/soccer-field-circle.jpg';
import soccerField from '../../images/soccer-field.jpg';
import soccerFieldLine from '../../images/soccer-field-line.jpg';
import soccerFieldShine from '../../images/soccer-field-shine.jpg';
import soccerFieldPlane from '../../images/soccer-field-plane.jpg';
import './ChooseField.scss';

class ChooseField extends Component {
    render() {
        return(
            <div onClick={(e) => this.props.handlerFieldToShow(e.target.src)} className="fields">
                <img className="fields__field" src={soccerFieldPlane} alt="campo de juego plano"/>
                <img className="fields__field" src={soccerFieldLine} alt="campo de juego con lineas"/>
                <img className="fields__field" src={soccerField} alt="campo de juego lineas horizontales"/>
                <img className="fields__field" src={soccerFieldLine} alt="campo de juego con lineas"/>
                <img className="fields__field" src={soccerFieldCircle} alt="campo de juego circular"/>
                <img className="fields__field" src={soccerFieldShine} alt="campo de juego brillante"/>
            </div>
        )
    }
}
export default ChooseField;