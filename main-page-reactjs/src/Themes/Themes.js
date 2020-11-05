import React from 'react'
import ThemesItems from './ThemesItems'

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
                    {this.createCheckboxes()}

                    <div className='buttons'>
                        <button
                            type="button"
                            className="btn btn-outline-primary mr-2"
                            onClick={this.selectAll}
                        >
                            Выбрать все
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-primary mr-2"
                            onClick={this.deselectAll}
                        >
                            Отменить
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Вперед
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Themes;