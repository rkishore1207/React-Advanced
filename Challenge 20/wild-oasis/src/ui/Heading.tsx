import styled, { css } from "styled-components";


const Heading = styled.h1`
  ${props => props.as === "h1" && css`
    font-size: 4rem;
  `}

  ${props => props.as === "h2" && css`
    font-size: 2rem;
  `}

  ${props => props.as === "h3" && css`
    font-size: 2rem;
    font-weight: 300px;
  `}

  margin-left: 10px;
`;

export default Heading;