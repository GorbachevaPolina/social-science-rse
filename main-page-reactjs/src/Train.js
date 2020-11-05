import React from 'react'
import Themes from './Themes/Themes'
import ThemesItems from './Themes/ThemesItems'

const style = {
    div: {
        background: 'white',
        borderRadius: '16px',
        margin: 'auto'
    }
}

class Train extends React.Component{
    constructor(props){
        super(props);
        this.state = { isDisplayed: false };
        this.displayThemes = this.displayThemes.bind(this);
    }

    displayThemes = () => {
        this.setState({ isDisplayed: true });
    }

    render() {
        return (
            <div>
            <div className="trains">
                <div style={style.div}>
                    <button onClick={this.displayThemes} className="train image1">
                        <span className="name-of-train">Вставь слово</span>
                    </button>
                </div>
                <div style={style.div}>
                    <button onClick={this.displayThemes} className="train image2">
                        <span className="name-of-train">Выбери правильный вариант</span>
                    </button>
                </div>
                <div style={style.div}>
                    <button onClick={this.displayThemes} className="train image3">
                        <span className="name-of-train">Верю-не верю</span>
                    </button>
                </div>
            </div>
            {this.state.isDisplayed ? <Themes /> : null}
            </div>
        );
    }
}
export default Train;