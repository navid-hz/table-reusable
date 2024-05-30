import React from "react";
import styled from "styled-components";
import Th from "../atoms/ThCell";
import Td from "../atoms/TdCell";


const Tr = ({ columns, row }) => {
    return (
        <TrStyled>
            {row
                ? columns.map((column, index) => (
                    <Td key={index}>{row[column]}</Td>
                ))
                : columns.map((column, index) => (
                    <Th key={index}>{column}</Th>
                ))}
        </TrStyled>
    );
};

export default Tr;

const TrStyled = styled.tr`
`;