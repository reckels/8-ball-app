import React from 'react';
import PropTypes from 'prop-types';

function EightBall ({result, questionAsked}) {
    const r = result;
    const qA = questionAsked;
    if(qA){
        return(
            <div className="container">
                <div className="user-card">
                    <h2>{r.magic.answer}</h2>
                </div>
            </div>
        );
    }
    return null;

}

EightBall.propTypes = {result: PropTypes.object.isRequired, questionAsked: PropTypes.bool.isRequired};

export default EightBall;