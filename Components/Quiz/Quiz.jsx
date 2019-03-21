import React from 'react';
import ReactDOM from 'react-dom';
import './Quiz.scss';
import Question from '../Quiz/Question/Question.jsx';


class Quiz extends React.Component {
    render() {
        return (
            <div>
                <Question/>
            </div>
        )
    }
}

export default Quiz;