import React from 'react';
import styles from './HighlightAtom.module.css';

function HighlightAtom({ children }) {
    return <div className={styles.highlight}>{children}</div>;
}

export default HighlightAtom;
