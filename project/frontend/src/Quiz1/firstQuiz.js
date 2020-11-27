import React from 'react'
import Answer from './../Answer'
import ReactDOM from 'react-dom'
import ShowScorePage from './ShowScorePage'
import {arrayOfQuestions} from './../MainPage/Themes/Themes'

var _chosenAnswer= '';
var currentQuestion = 0;
var score = 0;
var isCorrectAnswerDisplayed = false;
var numberOfQuestions = 0;  //arrayOfQuestions.length();

class FirstQuiz extends React.Component {
    handleAnswerOption() {
        this.setOption();
        if (_chosenAnswer.toLowerCase() == arrayOfQuestions[currentQuestion].answerText.toLowerCase()) {
            score += 1;
        }
        var nextQuestion = currentQuestion + 1; 
        if (nextQuestion < arrayOfQuestions.length) {
            currentQuestion = nextQuestion;
        } else {
            numberOfQuestions = arrayOfQuestions.length;
            ReactDOM.render(<ShowScorePage />, document.getElementById('root'));
        }
        var val= document.getElementById('answerInput');
        val.value="";
        this.forceUpdate();
    }

    setOption() {
        _chosenAnswer = document.getElementById('answerInput').value;
    }

    findCorrectAnswer() {
        this.setOption();
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
                    <input id="answerInput"></input>
                    <div className="quiz-buttons">
                        {/*this.setOption()*/}
                        <button onClick={() => this.findCorrectAnswer()} className="choose-button">Результат</button>
                        <button onClick={() => this.handleAnswerOption()} className="choose-button">Далее</button>
                    </div>
                    
                    {isCorrectAnswerDisplayed ? <Answer isCorrect={_chosenAnswer.toLowerCase()} answer={arrayOfQuestions[currentQuestion].answerText.toLowerCase()} /> : null}
                    {isCorrectAnswerDisplayed = false}
                </div>
            </div> 
            

        );
    }
}

export default FirstQuiz;
export {score}
export {numberOfQuestions}