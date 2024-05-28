import React from "react";
import styled from "styled-components";
import Th from "../atoms/ThCell";
import Tr from "../molecules/Tr";
import Td from "../atoms/TdCell";

const Table = ({ data }) => {

    const columns = Object.keys(data[0]);

    return (
        <TableStyled>
            <thead>
                <Tr>
                    {columns.map((column, index) => (
                        <Th key={index}>{column}</Th>
                    ))}
                </Tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <Tr key={index}>
                        {columns.map((column, index) => (
                            <Td key={index}>{row[column]}</Td>
                        ))}
                    </Tr>
                ))}
            </tbody>
        </TableStyled>
    );
}

export default Table;


const TableStyled = styled.table`
    border-collapse: collapse;
    
`;