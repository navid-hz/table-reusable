import React from 'react';
import styles from './TitleAtom.module.css';

const TitleAtom = ({ text, className = '' }) => {
    return <h1 className={`${styles.title} ${className}`}>{text}</h1>;
};

export default TitleAtom;
