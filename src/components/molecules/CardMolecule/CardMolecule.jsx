import React from 'react';
import styles from './CardMolecule.module.css'; // Use CSS modules for scoped styles

function CardMolecule({ animal, size }) {
    const classNames = `${styles.card} ${styles[size]}`;

    const backgroundStyle = {
        backgroundImage: `url(${animal.ImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: 'white',
        padding: '10px',
        height: '100%'
    };

    return (
        <div className={classNames}>
            <div className={styles.background} style={backgroundStyle}>
                <h2>{animal.Name}</h2>
                <p>{animal.Description}</p>
                {animal.Geography && (
                    <ul>
                        {animal.Geography.map((place, index) => (
                            <li key={index}>{place}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CardMolecule;
