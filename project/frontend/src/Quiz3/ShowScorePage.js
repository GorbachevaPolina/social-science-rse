import React from 'react'
import ReactDOM from 'react-dom'
import Train from './../MainPage/Themes/Train'
import {score} from './ThirdQuiz'
import {numberOfQuestions} from './ThirdQuiz'

class ShowScorePage extends React.Component {
    goOnMainPage = () => {
        window.location.reload();
        ReactDOM.render(<Train />, document.getElementById('root'));
    }
    
    render() {
        return(
            <div className="quiz-card">
                {/*console.log(numberOfQuestions)*/}
                <p  className="quiz-text">{score} из {numberOfQuestions}</p>
                <button onClick={() => this.goOnMainPage()} className="choose-button">На главную страницу</button>
            </div>
        )
    }
}

export default ShowScorePage
