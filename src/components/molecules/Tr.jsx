import React from "react";
import styled from "styled-components";
import Th from "../atoms/ThCell";
import Td from "../atoms/TdCell";


const Tr = ({ columns, children }) => {
    return (
        <TrStyled>
            {columns.map((column, index) => (
                <Th key={index}>{column}</Th>
            ))}
        </TrStyled>
    );
};

export default Tr;

const TrStyled = styled.tr`
`;