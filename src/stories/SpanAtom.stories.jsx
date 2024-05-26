// SpanAtom.stories.jsx
import React from 'react';
import SpanAtom from '../components/atoms/SpanAtom'; // Adjust the import path as needed

// Default export that configures the metadata for Storybook
export default {
    title: 'Atoms/SpanAtom',
    component: SpanAtom,
    argTypes: {
        text: {
            control: 'text',
            description: 'The text content to display inside the span element',
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply for custom styling',
        },
    },
};

// Template function to render the component with arguments
const Template = (args) => <SpanAtom {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
    text: 'Default Span Text',
    className: '',
};

// Story with a custom class
export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
    text: 'Stylish Span Text',
    className: 'custom-span-class', // Ensure this class is defined in your CSS
};
