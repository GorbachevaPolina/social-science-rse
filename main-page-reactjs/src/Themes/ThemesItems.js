import React from 'react'

const styles = {
    /*li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem'
    },*/

    input: {
        marginRight: '1rem'
    }
}

function ThemesItems({themes, index}) {
    return (
    <li className='point-and-theme'>
        <span className='theme'>
            <input type='checkbox' style={styles.input}/>
            <strong>{index + 1}</strong>
            &nbsp;
            {themes.title}
        </span>
    </li>
    )
}

export default ThemesItems;