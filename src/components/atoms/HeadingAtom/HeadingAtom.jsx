import React from 'react';
import styles from './HeadingAtom.module.css';

const HeadingAtom = ({ children, className = '' }) => {
    return <h1 className={`${styles.heading} ${className}`}>{children}</h1>;
};

export default HeadingAtom;
