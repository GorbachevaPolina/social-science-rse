import React from 'react'

function Answer({isCorrect, answer}) {

    if(isCorrect) 
        return (<div>Молодец!!!!</div>);
    else return (<div>Неправильно. Правильный ответ: {answer}</div>);
}

export default Answer