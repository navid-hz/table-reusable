import React from 'react';
import ImageAtom from '../components/atoms/ImageAtom'; // Corrected import path

export default {
    title: 'Atoms/ImageAtom',
    component: ImageAtom,
    argTypes: {
        src: {
            control: 'select',
            options: [
                '/images/elefant.jpg',
                '/images/crocodile.jpg',
                '/images/gorilla.jpg'
            ],
        },
        alt: { control: 'text' },
    },
};

const Template = (args) => {
    const fullSrc = `${window.location.origin}${args.src}`;
    return <ImageAtom {...args} src={fullSrc} />;
};

export const Default = Template.bind({});
Default.args = {
    src: '/images/elefant.jpg',
    alt: 'Elefant',
};
