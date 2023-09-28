import React, { useState, useEffect } from 'react';
import Title from '../components/title';
import upgrades from '../upgrades';
import Btn from '../components/btn';

const UpgradesList = ({ cats, updateNumberCats, updateCatsPerSecond}) => {
    const storedUpgradeCounts = JSON.parse(localStorage.getItem('upgradeCounts'));
    const initialUpgradeCounts = storedUpgradeCounts || upgrades.map(upgrade => ({ id: upgrade.id, count: 0 }));

    const [upgradeCounts, setUpgradeCounts] = useState(initialUpgradeCounts);

    const getData = () => {
        const storedUpgradeCounts = JSON.parse(localStorage.getItem('upgradeCounts'));
        if (storedUpgradeCounts) {
            setUpgradeCounts(storedUpgradeCounts);
    }}

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        localStorage.setItem('upgradeCounts', JSON.stringify(upgradeCounts));
}, [upgradeCounts]);

    const buyUpgrade = (upgrade) => {
        const selectedUpgrade = upgrades.find(item => item.id === upgrade.id);
        if (selectedUpgrade && cats >= selectedUpgrade.price) {
        console.log('Mejora comprada:', selectedUpgrade.name);
        updateNumberCats(selectedUpgrade.price);
        const newCounts = upgradeCounts.map(item =>
            item.id === upgrade.id ? { ...item, count: item.count + 1 } : item
    );

    setUpgradeCounts(newCounts);

    const upgradeCPS = selectedUpgrade.catsSecond;
        updateCatsPerSecond(upgradeCPS);
        } else {
        console.log('No hay suficientes gatos para comprar esta mejora');
        }
};

    return (
        <div className='upgrades'>
        <Title text='Upgrades' />
        <ul className='upgrades-list'>
            {upgrades.map((upgrade) => (
            <li className='upgrade-item' key={upgrade.id}>
                <img className='upgrade-img' src={upgrade.image} alt={upgrade.name} />
                <div className='vertical'>
                <p>{upgradeCounts.find(item => item.id === upgrade.id).count ? `Lvl. ${upgradeCounts.find(item => item.id === upgrade.id).count}` : 'Lvl. 0'}</p>
                <p>{upgrade.name}</p>
                </div>
                <p>{`+ ${upgrade.catsSecond} C/S`}</p>
                <Btn className={cats >= upgrade.price ? 'upgrade-btn green' : 'upgrade-btn red'} text={`Buy ${upgrade.price} Cats`} onClick={() => buyUpgrade(upgrade)} />
            </li>
            ))}
        </ul>
        </div>
    );
};

export default UpgradesList;
