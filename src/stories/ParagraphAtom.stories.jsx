// ParagraphAtom.stories.jsx
import React from 'react';
import ParagraphAtom from '../components/atoms/ParagraphAtom'; // Ensure correct import path

// Default export that configures the metadata for Storybook
export default {
    title: 'Atoms/ParagraphAtom',
    component: ParagraphAtom,
    argTypes: {
        text: {
            control: 'text',
            description: 'The text content to display inside the paragraph',
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply for custom styling',
        },
    },
};

// Template function to render the component with arguments
const Template = (args) => <ParagraphAtom {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
    text: 'This is a default paragraph.',
    className: '',
};

// Story with a custom class
export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
    text: 'This paragraph uses a custom CSS class.',
    className: 'custom-paragraph-class', // Ensure this class is defined in your CSS
};
