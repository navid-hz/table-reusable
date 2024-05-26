import React from 'react';
import styles from './ImageAtom.module.css';

const ImageAtom = ({ src, alt, className = '' }) => (
    <img src={src} alt={alt} className={`${styles.image} ${className}`} />
);

export default ImageAtom;
