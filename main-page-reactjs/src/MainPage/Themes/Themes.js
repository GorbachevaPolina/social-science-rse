import React from 'react'
import ThemesItems from './ThemesItems'
import ReactDOM from 'react-dom'
import SecondQuiz from '../../Quiz2/SecondQuiz'
import { id } from './Train'

const themes = [
    "Тема1", 
    "Тема2",
    "Тема3",
    "Тема4",
    "Тема5",
    "Тема6",
    "Тема7",
];


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
        Object.keys(this.state.checkboxes).filter(checkbox => this.state.checkboxes[checkbox]).forEach(checkbox => {console.log(checkbox, "is selected.");});
        if(id == 2) {
            ReactDOM.render(<SecondQuiz />, document.getElementById('root'));
        }
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