import React from 'react'
import ReactDOM from 'react-dom'
import Train from './../MainPage/Themes/Train'
import {score} from './SecondQuiz'

class ShowScorePage extends React.Component {
    goOnMainPage = () => {
        ReactDOM.render(<Train />, document.getElementById('root'));
    }
    
    render() {
        return(
            <div>
                <p>{score} из 4</p>
                <button onClick={() => this.goOnMainPage()}>На главную страницу</button>
            </div>
        )
    }
}

export default ShowScorePage
