import React from 'react'
import ThemesItems from './ThemesItems'
import ReactDOM from 'react-dom'
import FirstQuiz from '../../Quiz1/FirstQuiz'
import SecondQuiz from '../../Quiz2/SecondQuiz'
import ThirdQuiz from '../../Quiz3/ThirdQuiz'
import { id } from './Train'
import axios from 'axios'

const themesToSend = {
    isChosen1: false,
    isChosen2: false,
    isChosen3: false,
    isChosen4: false
}

const themes = [
    "Типы обществ",
    "Налоги",
    "Семья",
    "Государство"
];

export var arrayOfQuestions; 

class Themes extends React.Component {
    
    state = {
        checkboxes: themes.reduce(
            (options, option) => ({
                ...options,
                [option]: false
            }),
            {}
        )
    };

    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.checkboxes).forEach(checkbox => {
            this.setState(prevState => ({
                checkboxes: {
                    ...prevState.checkboxes,
                    [checkbox]: isSelected
                }
            }));
        });
    };

    selectAll = () => this.selectAllCheckboxes(true);

    deselectAll = () => this.selectAllCheckboxes(false);

    handleCheckboxChange = changeEvent => {
        const {name} = changeEvent.target;
        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name]
            }
        }));
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        var keys = Object.keys(this.state.checkboxes);
        themesToSend.isChosen1 = this.state.checkboxes[keys[0]];
        themesToSend.isChosen2 = this.state.checkboxes[keys[1]];
        themesToSend.isChosen3 = this.state.checkboxes[keys[2]];
        themesToSend.isChosen4 = this.state.checkboxes[keys[3]];
        
        async function getArray() {
            axios.post('http://127.0.0.1:8000/api/themes/', themesToSend);
            var resp = await axios.get('http://127.0.0.1:8000/api/themes/');
            console.log(resp);
            if (id ==1 ) {
                var response = await fetch("http://127.0.0.1:8000/api/firstquiz/?format=json");
            }
            if (id  == 2) {
                var response = await fetch("http://127.0.0.1:8000/api/secondquiz/?format=json");
            }
            if (id  == 3) {
                var response = await fetch("http://127.0.0.1:8000/api/thirdquiz/?format=json");
            }
            arrayOfQuestions = await response.json();
            return arrayOfQuestions;
        };

        (async () => {
            console.log(await getArray());
            if(id == 1) {
                ReactDOM.render(<FirstQuiz />, document.getElementById('root'));
            }
            if(id == 2) {
                ReactDOM.render(<SecondQuiz />, document.getElementById('root'));
            }
            if(id==3) {
                ReactDOM.render(<ThirdQuiz />, document.getElementById('root'));
            }
        })()

    };

    createCheckbox = option => (
        <ThemesItems 
            label={option}
            isSelected={this.state.checkboxes[option]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option}
        />
    );

    createCheckboxes = () => themes.map(this.createCheckbox);

    render() { 
        return(
            <div className='container'>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="themes-and-buttons">{this.createCheckboxes()}</div>

                    <div className='choose-buttons'>
                        <button
                            type="button"
                            className="choose-button"
                            onClick={this.selectAll}
                        >
                            Выбрать все
                        </button>
                        <button
                            type="button"
                            className="choose-button"
                            onClick={this.deselectAll}
                        >
                            Отменить
                        </button>
                    </div>
                        <button type="submit"  className="button-go">
                            <span className="button-go-text">Вперед</span>
                        </button>
                    
                </form>
            </div>
        );
    }
}

export default Themes;
//export {arrayOfQuestions};