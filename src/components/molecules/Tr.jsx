import React from "react";
import styled from "styled-components";

const Tr = ({ children }) => {
    return <TrStyled>{children}</TrStyled>;
};

export default Tr;

const TrStyled = styled.tr`
`;