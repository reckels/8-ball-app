import React from 'react';
import PropTypes from 'prop-types';
import ball from './magic-8-ball.png';
import './EightBall.css';

function EightBall ({result, questionAsked}) {
    const r = result;
    const qA = questionAsked;
    if(qA){
        return(
            <div className="container">
                <div className="magic-ball">
                    <img className="ball" src={ball} alt="magic eight ball"/>
                    <h5 className="text">{r.magic.answer}</h5>
                </div>
            </div>
        );
    }
    return(
        <div className="container">
            <div className="magic-ball">
                <img className="ball" src={ball} alt="magic eight ball"/>
            </div>
        </div>
    );

}

EightBall.propTypes = {result: PropTypes.object.isRequired, questionAsked: PropTypes.bool.isRequired};

export default EightBall;