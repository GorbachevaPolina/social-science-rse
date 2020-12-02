import React from 'react'

const styles = {
    input: {
        //margin: 'auto'
    }
    
}

function ThemesItems({label, isSelected, onCheckboxChange}) {
    return (
        <div className='point-and-theme'>
            <label>
                <input
                    type='checkbox'
                    name={label}
                    checked={isSelected}
                    onChange={onCheckboxChange}
                    style={styles.input}
                />
                <span className="theme">{label}</span>
            </label>
            
            <button className="theory-button">
                <img src="../../../static/books.png" className="theory-image"></img>
            </button>
        </div>
    )
}

export default ThemesItems;