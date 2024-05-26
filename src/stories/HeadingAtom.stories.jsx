import React from 'react';
import HeadingAtom from '../components/atoms/HeadingAtom';

// Default export that configures the metadata for Storybook
export default {
    title: 'Atoms/HeadingAtom',
    component: HeadingAtom,
    argTypes: {
        className: {
            control: 'text',
            description: 'CSS class to add custom styling',
            defaultValue: '',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'none' },
            },
        },
    },
};

// Story that demonstrates the default use
export const Default = {
    args: {
        children: 'Default Heading Text',
        className: '',
    },
};

// Story that demonstrates custom styling
export const WithCustomClass = {
    args: {
        children: 'Heading with Custom Class',
        className: 'custom-heading', // Ensure this class is defined in your CSS
    },
};
