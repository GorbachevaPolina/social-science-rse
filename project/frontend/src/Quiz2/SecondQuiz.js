import React from 'react'
import Answer from './Answer'
import ReactDOM from 'react-dom'
import ShowScorePage from './ShowScorePage'
import {arrayOfQuestions} from './../MainPage/Themes/Themes'


var _chosenAnswer= '';
var currentQuestion = 0;
var score = 0;
var isCorrectAnswerDisplayed = false;


class SecondQuiz extends React.Component {
    handleAnswerOption(chosenAnswer) {
        if (chosenAnswer == arrayOfQuestions[currentQuestion].answerText) {
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
                        <input type="radio" onClick={() => this.setOption(arrayOfQuestions[currentQuestion].option1)} name="x"/>
                        <span className="quiz-text">{arrayOfQuestions[currentQuestion].option1}</span>
                    </label> <br />
                    <label>
                        <input type="radio" onClick={() => this.setOption(arrayOfQuestions[currentQuestion].option2)} name="x"/>
                        <span className="quiz-text">{arrayOfQuestions[currentQuestion].option2}</span>
                    </label> <br />
                    <label>
                        <input type="radio" onClick={() => this.setOption(arrayOfQuestions[currentQuestion].option3)} name="x"/>
                        <span className="quiz-text">{arrayOfQuestions[currentQuestion].option3}</span>
                    </label> <br />
                    <label>
                        <input type="radio" onClick={() => this.setOption(arrayOfQuestions[currentQuestion].option4)} name="x"/>
                        <span className="quiz-text">{arrayOfQuestions[currentQuestion].option4}</span>
                    </label> <br />
                    <div>
                        <button onClick={() => this.findCorrectAnswer()} className="choose-button">Результат</button>
                        <button onClick={() => this.handleAnswerOption(_chosenAnswer)} className="choose-button">Далее</button>
                    </div>
                    
                    {isCorrectAnswerDisplayed ? <Answer isCorrect={_chosenAnswer} answer={arrayOfQuestions[currentQuestion].answerText} /> : null}
                    {isCorrectAnswerDisplayed = false}
                </div>
            </div> 
            

        );
    }
}

export default SecondQuiz;
export {score}