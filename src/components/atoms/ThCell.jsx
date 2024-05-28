import React from "react";
import styled from "styled-components";


const ThCell = ({ children }) => {
    return <Th>{children}</Th>;
};

export default ThCell;

const Th = styled.th`
`;	