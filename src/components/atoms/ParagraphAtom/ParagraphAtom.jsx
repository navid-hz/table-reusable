// ParagraphAtom.jsx
import React from 'react';
import styles from './ParagraphAtom.module.css';

const ParagraphAtom = ({ text, className = '' }) => {
    return <h1 className={`${styles.title} ${className}`}>{text}</h1>;
};

export default ParagraphAtom;
