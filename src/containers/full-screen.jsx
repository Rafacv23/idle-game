import React, {useState, useEffect} from 'react';
import CounterDisplay from './counter-display';
import UpgradesList from './upgrades-list';
import Store from './store';

const FullScreen = (props) => {

    const storedCats = parseInt(localStorage.getItem("cats")) || 0;
    const storedCatsPerSecond = parseInt(localStorage.getItem("catsPerSecond")) || 0;

    const [cats, setCats] = useState(storedCats)
    const [catsPerSecond, setCatsPerSecond] = useState(storedCatsPerSecond)
    
    const updateNumberCats = (price) => {
        setCats(cats - price)
    }

    const updateCatsPerSecond = (percent) => {
        setCatsPerSecond(catsPerSecond + percent)
    }

    const resetValues = () => {

        window.confirm("Are you sure you want to reset?")

        localStorage.removeItem("cats")
        localStorage.removeItem("catsPerSecond")

        setCats(0)
        setCatsPerSecond(0)
    }

    useEffect(() => {

        localStorage.setItem("cats", cats)
        localStorage.setItem("catsPerSecond", catsPerSecond)

        const intervalId = setInterval(() => {
            setCats((prevCats) => prevCats + catsPerSecond);
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, [catsPerSecond, cats]);

    return (
        <div className={props.className}>
            <div className='row'>
                {/*<Store></Store>*/}
                <CounterDisplay resetValues={resetValues} catsPerSecond={catsPerSecond} setCats={setCats} cats={cats}></CounterDisplay>
                <UpgradesList updateCatsPerSecond={updateCatsPerSecond} catsPerSecond={catsPerSecond} updateNumberCats={updateNumberCats} cats={cats}></UpgradesList>
            </div>
        </div>
    );
}

export default FullScreen;
