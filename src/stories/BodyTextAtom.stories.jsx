// BodyTextAtom.stories.jsx
import React from 'react';
import BodyTextAtom from '../components/atoms/BodyTextAtom'; // Ensure the path is correct

// Default export configuring the metadata for Storybook
export default {
    title: 'Atoms/BodyTextAtom',
    component: BodyTextAtom,
    argTypes: {
        text: {
            control: 'text',
            description: 'The text content of the body text atom',
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
const Template = (args) => <BodyTextAtom {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
    text: 'Default Body Text',
    className: '',
};

// Story with a custom class
export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
    text: 'Stylish Body Text',
    className: 'custom-class', // Ensure this class is defined in your CSS for visual effect
};
