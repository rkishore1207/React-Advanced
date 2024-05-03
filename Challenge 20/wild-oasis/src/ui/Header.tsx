import styled from "styled-components";


const StyledHeader = styled.header`
    background-color: gray;
    border-bottom: 1px solid green;
    padding: 1.2rem 2.4rem;
    font-size: 2rem;
`;

function Header() {
    return (
        <StyledHeader>Header</StyledHeader>
    );
}

export default Header;