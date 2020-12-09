import React from 'react'

function Answer({isCorrect, answer}) {

    if(isCorrect == answer) 
        return (<div className="quiz-text">Молодец!!!!</div>);
    else return (<div className="quiz-text">Неправильно. Правильный ответ: {answer}</div>);
}

export default Answer