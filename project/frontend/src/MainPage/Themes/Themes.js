import React from 'react'
import ThemesItems from './ThemesItems'
import ReactDOM from 'react-dom'
import SecondQuiz from '../../Quiz2/SecondQuiz'
import ThirdQuiz from '../../Quiz3/ThirdQuiz'
import { id } from './Train'

/*const themesToSend = [
    { theme: "soc", isChosen: false},
    { theme: "tax", isChosen: false},
    { theme: "fam", isChosen: false},
    { theme: "state", isChosen: false}
];*/
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

export var arrayOfQuestions; /*= [
    {
        questionText: "Первый вопрос",
        option1: "Да",
        option2: "Нет",
        answerText: "Да"
    },
    {
        questionText: "Второй вопрос",
        option1: "первый вариант",
        option2: "второй вариант",
        answerText: "второй вариант"
    }
];*/

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
        //Object.keys(this.state.checkboxes).filter(checkbox => this.state.checkboxes[checkbox]).forEach(checkbox => {console.log(checkbox, "is selected.");});
        var keys = Object.keys(this.state.checkboxes);
        /*for(var i = 0; i < 4; i++) {
            themesToSend[i].isChosen = this.state.checkboxes[keys[i]];
            //console.log(this.state.checkboxes[keys[i]])
        }*/
        themesToSend.isChosen1 = this.state.checkboxes[keys[0]];
        themesToSend.isChosen2 = this.state.checkboxes[keys[1]];
        themesToSend.isChosen3 = this.state.checkboxes[keys[2]];
        themesToSend.isChosen4 = this.state.checkboxes[keys[3]];
        

        (async () => {
            var response = await fetch('http://127.0.0.1:8000/api/themes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(themesToSend)
            });
            const json = await response.json();
            window.location.reload();
        })();
        
        //console.log(JSON.stringify(themesToSend));
        async function getArray() {
            var response = await fetch("http://127.0.0.1:8000/api/secondquiz/?format=json");
            arrayOfQuestions = await response.json();
            return arrayOfQuestions;
        };

        (async () => {
            console.log(await getArray());
            if(id == 2) {
                ReactDOM.render(<SecondQuiz />, document.getElementById('root'));
            }
            if(id==3) {
                ReactDOM.render(<ThirdQuiz />, document.getElementById('root'));
            }
        })()
        /*if(id == 2) {
            ReactDOM.render(<SecondQuiz />, document.getElementById('root'));
        }
        if(id==3) {
            ReactDOM.render(<ThirdQuiz />, document.getElementById('root'));
        }*/
        /*
        getArray().then(arrayOfQuestions => console.log(arrayOfQuestions)); */

        //console.log(arrayOfQuestions);
        //console.log(themesToSend)
        
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
    
    /* hello = () => {
       // const element = (<secondQuiz />);
        ReactDOM.render(<SecondQuiz />, document.getElementById('root'));
    }*/

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