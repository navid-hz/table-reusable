// TitleAtom.stories.jsx
import React from 'react';
import TitleAtom from '../components/atoms/TitleAtom';

// Default export that configures metadata for Storybook
export default {
    title: 'Atoms/TitleAtom',
    component: TitleAtom,
    argTypes: {
        text: {
            control: 'text',
            description: 'The text content of the title',
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply for custom styling',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
    },
};

// Template function to render the component with arguments
const Template = (args) => <TitleAtom {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
    text: 'Hello, World!',
    className: '',
};

// Story with a custom class
export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
    text: 'Stylish Title',
    className: 'custom-class', // Ensure this class is defined in your CSS
};
