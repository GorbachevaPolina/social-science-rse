import React from 'react'
import Themes from './Themes'
//import ThemesItems from './ThemesItems'
import ChooseTheory from '../../Theory/ChooseTheory'
import ReactDOM from 'react-dom'

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

    renderTheory() {
        ReactDOM.render(<ChooseTheory />, document.getElementById('root'));
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
            <button className="button-go" onClick={() => this.renderTheory()}>
                <span className="button-go-text">Теория</span>
            </button>
            {/*console.log(id)*/}
            </div>
        );
    }
}
export default Train;
export { id };
