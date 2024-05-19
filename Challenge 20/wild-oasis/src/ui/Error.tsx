/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

export const StyledError = styled.div`
    color:red;
    margin:0 auto;
    font-size: small;
    font-weight: 700;
`;

interface ErrorProps{
    children:any
}

function Error({children}:ErrorProps) {
    return (
        <StyledError>{children}</StyledError>
    );
}

export default Error;