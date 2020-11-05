import React from 'react'

const styles = {
    input: {
        marginRight: '1rem'
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
                {label}
            </label>
        </div>
    )
}

export default ThemesItems;