import React from "react";
import styled from "styled-components";

const TdCell = ({ children }) => {
    return <Td>{children}</Td>;
}

export default TdCell;

const Td = styled.td`
    border: 1px solid #000;
    padding: 8px;
    text-align: center;
    width: fit-content;
    font-family: 'Arial', sans-serif;
`;