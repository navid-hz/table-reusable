import React from "react";
import styled from "styled-components";


const ThCell = ({ children }) => {
    return <Th>{children}</Th>;
};

export default ThCell;

const Th = styled.th`
    border: 1px solid #000;
    padding: 8px;
    text-align: center;
    width: fit-content;
    background-color: #f2f2f2;
    font-family: 'Arial', sans-serif;
`;	