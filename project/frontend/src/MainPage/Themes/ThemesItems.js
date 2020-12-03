import React from 'react'

const styles = {
    input: {
        //margin: 'auto'
    }
    
}

/*function renderTheory(label) {
    console.log(label);
    if (label == "Типы обществ") {
        ReactDOM.render(<Theory1 />, document.getElementById('root'));
    }
    if (label == "Семья") {
        ReactDOM.render(<Theory2 />, document.getElementById('root'));
    }
    if (label == "Налоги") {
        ReactDOM.render(<Theory3 />, document.getElementById('root'));
    }
    if (label == "Государство") {
        ReactDOM.render(<Theory4 />, document.getElementById('root'));
    }
}*/

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
            
        </div>
    )
}

export default ThemesItems;