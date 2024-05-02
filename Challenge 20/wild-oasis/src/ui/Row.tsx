import styled, { css } from "styled-components";

interface RowProps{
    type?:string,
}

const Row = styled.div<RowProps>`
    display: flex;
    align-items: center;

    ${props => props.type === "vertical" && css`
        flex-direction: column;
        justify-content: center;
    `}

    ${props => props.type === "horizontal" && css`
        justify-content: space-between;
    `}
`;

Row.defaultProps = {
    type:"vertical"
}

export default Row;