import React from 'react';
import Btn from '../components/btn';
import Title from '../components/title';

const CounterDisplay = ({cats, setCats, catsPerSecond, resetValues}) => {

    const addCats = () => {
        setCats(cats + 1)
    }

    return (
        <div className='counter-display'>
            <Title text="Miaudle"></Title>
            <Btn onClick={() => resetValues()} text="Restart"></Btn>
            <Btn className="cat-btn" onClick={() => addCats()}></Btn>
            <h2>{ cats} Cats</h2>
            <p>per second: {catsPerSecond}</p>
        </div>
    );
}

export default CounterDisplay;
