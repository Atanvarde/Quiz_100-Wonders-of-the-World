import React from 'react';
import ReactDOM from 'react-dom';
import './Question.scss';



class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            question : null,
            counter: 1
        }
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => {
                // console.log(response.json());
                if (response.ok)
                    return response.json();
                else
                    throw new Error('Błąd sieci!')
            })
            .then(data => {
                console.log(data);
                this.setState({
                    data: data.sort(() => {        //zmieszana tablica z danymi
                        return 0.5 - Math.random()
                    })
                },this.getQuestion)
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }

    getQuestion = () => {
        let shuffledData = this.state.data;
        //stworz obiekt question o kluczach: flag correct
        let question = {
            flag: shuffledData[0].flag,
            correctAnswer: shuffledData[0].name,
            wrongAnswers: [],
        };
        //wez 4 pierwsze elementy z tablicy
        //ustaw z pierwszego elementu flage w obiekcie question
        //ustaw prawidlowa odpowiedz w obiekcie question jako kraj z pierwszego elementu

        question.wrongAnswers.push(shuffledData[1].name);
        question.wrongAnswers.push(shuffledData[2].name);
        question.wrongAnswers.push(shuffledData[3].name);
        question.wrongAnswers.push(question.correctAnswer);
        question.wrongAnswers.sort(() => {return 0.5 - Math.random()});
        this.setState({
            question: question
        })
    };

    nextQuestionCounter = (index) => {
        if(this.state.counter < 250) {
        this.setState({
            counter: this.state.counter + 1,
            data: this.state.data.sort(() => {        //zmieszana tablica z danymi
                return 0.5 - Math.random()
            })
        },this.getQuestion)
    }};


    render() {
        if (this.state.question === null) {
            console.log("Loading...");
            return null
        } else {
            console.log(this.state.data[0]);
            console.log(this.state);
            console.log(this.state.counter);

            const {question} = this.state;

            return (
                <div className="main_container">
                    <div className="flag_container">
                        <img id="flag" src={question.flag}/>
                    </div>
                    <div className="question_container">
                       <p>{this.state.counter}. Which country does this flag belong to ?</p>
                    </div>
                    <div className="answers_container">
                        <button onClick={()=>this.nextQuestionCounter(0)}>{question.wrongAnswers[0]}</button>
                        <button onClick={()=>this.nextQuestionCounter(1)}>{question.wrongAnswers[1]}</button>
                        <button onClick={()=>this.nextQuestionCounter(2)}>{question.wrongAnswers[2]}</button>
                        <button onClick={()=>this.nextQuestionCounter(3)}>{question.wrongAnswers[3]}</button>
                    </div>
                </div>
            )
        }
    }



}

export default Question;