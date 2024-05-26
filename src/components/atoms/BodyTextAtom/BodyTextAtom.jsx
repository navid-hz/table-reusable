import React from 'react';
import styles from './BodyTextAtom.module.css';

const BodyTextAtom = ({ text, className = '' }) => {
    return <h1 className={`${styles.title} ${className}`}>{text}</h1>;
};

export default BodyTextAtom;
