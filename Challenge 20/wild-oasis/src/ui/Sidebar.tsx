import styled from "styled-components";

export const StyledSideBar = styled.aside`
    background-color: red;
    border-bottom: 1px solid green;
    padding: 1.5rem 3rem;

    grid-row: 1/-1;
`;

function Sidebar() {
    return (
        <StyledSideBar>SideBar</StyledSideBar>
    );
}

export default Sidebar;