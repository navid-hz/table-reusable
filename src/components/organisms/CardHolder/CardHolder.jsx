import React, { useState } from 'react';
import AnimalCard from '../../organisms/AnimalCard';
import styles from './CardHolder.module.css';

function CardHolder({ animals }) {
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    const handleCardClick = (animalName) => {
        setSelectedAnimal(animalName);
    };

    const handleResetClick = () => {
        setSelectedAnimal(null);
    };

    return (
        <div>
            <button className={styles.resetButton} onClick={handleResetClick}>
                Reset Selection
            </button>

            <div className={styles.cardHolder}>
                {animals.map((animal) => (
                    <AnimalCard
                        key={animal.Name}
                        animal={animal}
                        size={selectedAnimal === animal.Name ? 'large' : 'small'}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardHolder;
