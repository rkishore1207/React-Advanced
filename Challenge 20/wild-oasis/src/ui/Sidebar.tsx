import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

export const StyledSideBar = styled.aside`
    background-color: var(--color-gray-0);
    border-bottom: 1px solid green;
    padding: 1.5rem 3rem;
    grid-row: 1/-1;
`;

function Sidebar() {
    return (
        <StyledSideBar>
            <Logo/>
            <MainNav/>
        </StyledSideBar>
    );
}

export default Sidebar;