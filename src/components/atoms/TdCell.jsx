import React from "react";
import styled from "styled-components";

const TdCell = ({ children }) => {
    return <Td>{children}</Td>;
}

export default TdCell;

const Td = styled.td`
`;