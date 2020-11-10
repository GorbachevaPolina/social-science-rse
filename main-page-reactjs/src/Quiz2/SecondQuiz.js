import React from 'react'
import Answer from './Answer'
import ReactDOM from 'react-dom'
import ShowScorePage from './ShowScorePage'

const arrayOfQuestions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
];

var _isCorrect= false;
var currentQuestion = 0;
var showScore = false;
var score = 0;
var rightAnswer = '';
var isCorrectAnswerDisplayed = false;


class SecondQuiz extends React.Component {
    handleAnswerOption(isCorrect) {
        if (isCorrect) {
            score += 1;
        }
        var nextQuestion = currentQuestion + 1; 
        if (nextQuestion < arrayOfQuestions.length) {
            currentQuestion = nextQuestion;
        } else {
            showScore = true;
            ReactDOM.render(<ShowScorePage score={score}/>, document.getElementById('root'));
        }
        this.forceUpdate();
    }

    setOption(answerOption) {
        _isCorrect = answerOption;
    }

    findCorrectAnswer() {
        for(var i = 0; i < 4; i++) 
            if(arrayOfQuestions[currentQuestion].answerOptions[i].isCorrect) 
                rightAnswer = arrayOfQuestions[currentQuestion].answerOptions[i].answerText;

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
                    <label className="quiz-input-choose">
                        <input type="radio" onClick={() => this.setOption(arrayOfQuestions[currentQuestion].answerOptions[0].isCorrect)} name="x"/>
                        <span className="quiz-text">{arrayOfQuestions[currentQuestion].answerOptions[0].answerText}</span>
                    </label> <br />
                    <label className="quiz-input-choose">
                        <input type="radio" onClick={() => this.setOption(arrayOfQuestions[currentQuestion].answerOptions[1].isCorrect)} name="x"/>
                        <span className="quiz-text">{arrayOfQuestions[currentQuestion].answerOptions[1].answerText}</span>
                    </label> <br />
                    <label className="quiz-input-choose">
                        <input type="radio" onClick={() => this.setOption(arrayOfQuestions[currentQuestion].answerOptions[2].isCorrect)} name="x"/>
                        <span className="quiz-text">{arrayOfQuestions[currentQuestion].answerOptions[2].answerText}</span>
                    </label> <br />
                    <label className="quiz-input-choose">
                        <input type="radio" onClick={() => this.setOption(arrayOfQuestions[currentQuestion].answerOptions[3].isCorrect)} name="x"/>
                        <span className="quiz-text">{arrayOfQuestions[currentQuestion].answerOptions[3].answerText}</span>
                    </label> <br />
                    <div>
                        <button onClick={() => this.findCorrectAnswer()} className="choose-button">Результат</button>
                        <button onClick={() => this.handleAnswerOption(_isCorrect)} className="choose-button">Далее</button>
                    </div>
                    
                    {isCorrectAnswerDisplayed ? <Answer isCorrect={_isCorrect} answer={rightAnswer} /> : null}
                    {isCorrectAnswerDisplayed = false}
                </div>
            </div> 
            

        );
    }
}

export default SecondQuiz;
export {score}