import React from 'react'
import ReactDOM from 'react-dom'
import Theory1 from "./Theory1"
import Theory2 from "./Theory2"
import Theory3 from "./Theory3"
import Theory4 from "./Theory4"

var id;
class ChooseTheory extends React.Component {

    chosenTheory(event) {
        id = event.currentTarget.id;
        if (id == 1) {
            ReactDOM.render(<Theory1 />, document.getElementById('root'));
        }
        if (id == 2) {
            ReactDOM.render(<Theory2 />, document.getElementById('root'));
        }
        if (id == 3) {
            ReactDOM.render(<Theory3 />, document.getElementById('root'));
        }
        if (id == 4) {
            ReactDOM.render(<Theory4 />, document.getElementById('root'));
        }
    }
    
    render() {
        
        return( 
            <div className="quiz-card">
                <p className="quiz-text">Выберите теоретический материал:</p>
                <div className="choose-theory-buttons">
                    <button id="1" className="choose-button" onClick={this.chosenTheory}>Типы обществ</button>
                    <button id="2" className="choose-button" onClick={this.chosenTheory}>Налоги</button>
                    <button id="3" className="choose-button" onClick={this.chosenTheory}>Семья</button>
                    <button id="4" className="choose-button" onClick={this.chosenTheory}>Государство</button>
                </div>
            </div>
        );
    }
}

export default ChooseTheory;;;;;;;