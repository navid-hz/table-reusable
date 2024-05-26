import React from 'react';
import HighlightAtom from '../HighlightModifier';
import CardMolecule from '../../molecules/CardMolecule';

function AnimalCard({ animal, size, onClick }) {
    return (
        <div onClick={() => onClick(animal.Name)}>
            <HighlightAtom>
                <CardMolecule animal={animal} size={size} />
            </HighlightAtom>
        </div>
    );
}

export default AnimalCard;
