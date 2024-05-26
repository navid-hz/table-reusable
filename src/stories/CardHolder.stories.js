import React, { useEffect, useState } from 'react';
import CardHolder from '../components/organisms/CardHolder';

export default {
    title: 'Organism/CardHolder',
    component: CardHolder,
};

const Template = (args) => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const response = await fetch('http://localhost:6006/animals.json');
                const data = await response.json();
                setAnimals(data);
            } catch (error) {
                console.error('Error fetching animal data:', error);
            }
        };

        fetchAnimals();
    }, []);

    return <CardHolder {...args} animals={animals} />;
};

export const Default = Template.bind({});
Default.args = {};
