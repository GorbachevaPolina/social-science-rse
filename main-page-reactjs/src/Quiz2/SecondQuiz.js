import React from 'react'
import Answer from './Answer'
import ReactDOM from 'react-dom'
import ShowScorePage from './ShowScorePage'

const arrayOfQuestions = [
    {
        questionText: 'What is the capital of France?',
        answer1: 'New York',
        answer2: 'London',
        answer3: 'Paris',
        answer4: 'Dublin',
        correctAnswer: 'Paris'
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answer1: 'Jeff Bezos',
        answer2: 'Elon Musk',
        answer3: 'Bill Gates',
        answer4: 'Tony Stark',
        correctAnswer: 'Elon Musk'
    },
    {
        questionText: 'The iPhone was created by which company?',
        answer1: 'Apple',
        answer2: 'Intel',
        answer3: 'Amazon',
        answer4: 'Microsoft',
        correctAnswer: "Apple",
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answer1: '1',
        answer2: '4',
        answer3: '6',
        answer4: '7',
        correctAnswer: "7",
    },
];

var _chosenAnswer= '';
var currentQuestion = 0;
var score = 0;
var isCorrectAnswerDisplayed = false;


class SecondQuiz extends React.Component {
    handleAnswerOption(chosenAnswer) {
        if (chosenAnswer == arrayOfQuestions[currentQuestion].correctAnswer) {
            score += 1;
        }
        var nextQuestion = currentQuestion + 1; 
        if (nextQuestion < arrayOfQuestions.length) {
            currentQuestion = nextQuestion;
        } else {
            ReactDOM.render(<ShowScorePage score={score}/>, document.getElementById('root'));
        }
        this.forceUpdate();
    }

    setOption(answerOption) {
        _chosenAnswer = answerOption;
    }

    findCorrectAnswer() {
        isCorrectAnswerDisplayed = true;
        this.forceUpdate();
    }
    
    render() {
        return( 
            <div className="quiz-card">
                <div className="question">
                <span className="quiz-text">{arrayOfQuestions[currentQuestion].questionText}</span>
                </div>
                <div className="answers"> 
                    <label>
                        <input type="radio" onClick={() => this.setOption(arrayOfQuestions[currentQuestion].answer1)} name="x"/>
                        <span className="quiz-text">{arrayOfQuestions[currentQuestion].answer1}</span>
                    </label> <br />
                    <label>
                        <input type="radio" onClick={() => this.setOption(arrayOfQuestions[currentQuestion].answer2)} name="x"/>
                        <span className="quiz-text">{arrayOfQuestions[currentQuestion].answer2}</span>
                    </label> <br />
                    <label>
                        <input type="radio" onClick={() => this.setOption(arrayOfQuestions[currentQuestion].answer3)} name="x"/>
                        <span className="quiz-text">{arrayOfQuestions[currentQuestion].answer3}</span>
                    </label> <br />
                    <label>
                        <input type="radio" onClick={() => this.setOption(arrayOfQuestions[currentQuestion].answer4)} name="x"/>
                        <span className="quiz-text">{arrayOfQuestions[currentQuestion].answer4}</span>
                    </label> <br />
                    <div>
                        <button onClick={() => this.findCorrectAnswer()} className="choose-button">Результат</button>
                        <button onClick={() => this.handleAnswerOption(_chosenAnswer)} className="choose-button">Далее</button>
                    </div>
                    
                    {isCorrectAnswerDisplayed ? <Answer isCorrect={_chosenAnswer} answer={arrayOfQuestions[currentQuestion].correctAnswer} /> : null}
                    {isCorrectAnswerDisplayed = false}
                </div>
            </div> 
            

        );
    }
}

export default SecondQuiz;
export {score}