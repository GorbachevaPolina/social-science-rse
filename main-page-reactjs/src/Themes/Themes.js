import React from 'react'
import ThemesItems from './ThemesItems'

/*const style = {
    ul: {
        
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}*/
function Themes(elem) {

    return (
        <div>
            <ul className='themes-and-button-active'>
                { elem.themes.map((themes, index) => {
                    return <ThemesItems themes={themes} key={themes.id} index={index}/> 
                })}
            </ul>
            <button className="button-go">
                <span className="button-go-text">Вперед</span>
            </button>
        </div>
    );
}

export default Themes;