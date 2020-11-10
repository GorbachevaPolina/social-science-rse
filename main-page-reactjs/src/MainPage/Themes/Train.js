import React from 'react'
import Themes from './Themes'
//import ThemesItems from './ThemesItems'

const style = {
    div: {
        background: 'white',
        borderRadius: '16px',
        margin: 'auto'
    }
}
var id = 0;


class Train extends React.Component{
    constructor(props){
        super(props);
        this.state = { isDisplayed: false };
        this.displayThemes = this.displayThemes.bind(this);
    }

    displayThemes(event) {
        id = event.currentTarget.id;
        this.setState({ isDisplayed: true});
        //console.log(id);
    }

    render() {
        return (
            <div>
            <div className="trains">
                <div style={style.div}>
                    <button onClick={this.displayThemes} id='1' className="train image1">
                        <span className="name-of-train">Вставь слово</span>
                    </button>
                </div>
                <div style={style.div}>
                    <button onClick={this.displayThemes} id='2' className="train image2">
                        <span className="name-of-train">Выбери правильный вариант</span>
                    </button>
                </div>
                <div style={style.div}>
                    <button onClick={this.displayThemes} id='3' className="train image3">
                        <span className="name-of-train">Верю-не верю</span>
                    </button>
                </div>
            </div>
            {this.state.isDisplayed ? <Themes /> : null}
            {/*console.log(id)*/}
            </div>
        );
    }
}
export default Train;
export { id };
