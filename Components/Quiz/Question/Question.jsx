import React from 'react';
import ReactDOM from 'react-dom';
import './Question.scss';
import {Redirect} from 'react-router-dom';


class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            question: null,
            counter: 1,
            score: 0,
            limit: 10,
            answer: 0,
        }
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => {
                if (response.ok)
                    return response.json();
                else
                    throw new Error('Błąd sieci!')
            })
            .then(data => {
                this.setState({
                    data: data.sort(() => {
                        return 0.5 - Math.random()
                    })
                }, this.getQuestion)
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }

    getQuestion = () => {

        let shuffledData = this.state.data;
        let question = {
            flag: shuffledData[0].flag,
            correctAnswer: shuffledData[0].name,
            wrongAnswers: [],
        };

        question.wrongAnswers.push(shuffledData[1].name);
        question.wrongAnswers.push(shuffledData[2].name);
        question.wrongAnswers.push(shuffledData[3].name);
        question.wrongAnswers.push(question.correctAnswer);
        question.wrongAnswers.sort(() => {
            return 0.5 - Math.random()
        });

        this.setState({
            question: question
        })
    };

    nextQuestionCounter = (index) => {

        if (this.state.answer < this.state.limit) {
            if (this.state.question.wrongAnswers[index] === this.state.question.correctAnswer) {
                this.setState({
                    score: this.state.score + 1
                })
            }
            this.setState({
                answer: this.state.answer + 1
            })
        }

        if (this.state.counter < this.state.limit) {
            this.setState({
                counter: this.state.counter + 1,
                data: this.state.data.sort(() => {
                    return 0.5 - Math.random()
                })
            }, this.getQuestion)
        }
    };

    renderRedirect = () => {
        if (this.state.answer === this.state.limit) {
            return <Redirect to={'/end/' + this.state.score / this.state.limit * 100}/>
        }
    };

    render() {
        if (this.state.question === null) {
            console.log("Loading...");
            return null
        } else {
            console.log(this.state);
            const {question} = this.state;
            return (
                <div className="main_container">
                    <div className="flag_container">
                        <img id="flag" alt="national flag picture"
                             src={question.flag}/><span>Score: {this.state.score}</span>
                    </div>
                    <div className="question_container">
                        <p>{this.state.counter}. Which country does this flag belong to ?</p>
                    </div>
                    <div className="answers_container">
                        {this.renderRedirect()}
                        <button onClick={() => this.nextQuestionCounter(0)}>{question.wrongAnswers[0]}</button>
                        <button onClick={() => this.nextQuestionCounter(1)}>{question.wrongAnswers[1]}</button>
                        <button onClick={() => this.nextQuestionCounter(2)}>{question.wrongAnswers[2]}</button>
                        <button onClick={() => this.nextQuestionCounter(3)}>{question.wrongAnswers[3]}</button>
                    </div>
                </div>
            )
        }
    }
}

export default Question;