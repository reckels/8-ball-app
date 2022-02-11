import React from 'react';
import EightBall from './EightBall';

class Asker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 'who am I?',
            result: {question: 'idk', answer: 'idk', type: 'idk'},
            questionAsked: false
        }
    }

    handleQuestionChanged(event) {
        var q = this.state.question;
        q = event.target.value;
    
        this.setState({ question: q });
    }

    render(){

        return(
            <div>
                <h1>Ask the magic 8 ball!</h1>
                <input type="text" onChange={this.handleQuestionChanged.bind(this)}></input>
                <button onClick={this.handleClick}>Ask</button>
                <EightBall result={this.state.result} questionAsked={this.state.questionAsked}/>
            </div>

        );
    }

    handleClick = () => {
        console.log(this.state.question);
        const url = "https://8ball.delegator.com/magic/JSON/" + this.state.question;
        fetch(url)
            .then(response => response.json())
            .then(object => {
                console.log(this.state.result);
                this.setState({
                    question: '',
                    result: object,
                    questionAsked: true
                }, () =>{
                    console.log(this.state.result);
                })
            })
    }
}



export default Asker;