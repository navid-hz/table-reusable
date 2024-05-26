import React from 'react';
import styles from './SpanAtom.module.css';

const SpanAtom = ({ text, className = '' }) => (
    <span className={`${styles.span} ${className}`}>{text}</span>
);

export default SpanAtom;
