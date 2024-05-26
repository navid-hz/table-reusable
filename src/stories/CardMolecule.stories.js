import React from 'react';
import CardMolecule from '../components/molecules/CardMolecule';
import HighlightAtom from '../components/atoms/HighlightAtom';

export default {
    title: 'Molecule/CardMolecule',
    component: CardMolecule,
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large']
        }
    },
    decorators: [(Story) => <div style={{ margin: '3em' }}><Story /></div>]
};

const Template = (args) => (
    <HighlightAtom>
        <CardMolecule {...args} />
    </HighlightAtom>
);

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    animal: {
        Name: "Elephant",
        ImageUrl: "/images/elefant.jpg",
        Description: "Elephants are large mammals...",
        Geography: ["Africa", "Asia"]
    }
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    animal: {
        Name: "Elephant",
        ImageUrl: "/images/elefant.jpg",
        Description: "Elephants are large mammals...",
        Geography: ["Africa", "Asia"]
    }
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    animal: {
        Name: "Elephant",
        ImageUrl: "/images/elefant.jpg",
        Description: "Elephants are large mammals...",
        Geography: ["Africa", "Asia"]
    }
};
