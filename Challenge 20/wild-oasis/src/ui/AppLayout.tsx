import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 20% 1fr;
    grid-template-rows: auto 1fr;
`;


const StyledMain = styled.main`
    padding: 1rem;
    background-color:var(--color-grey-200);
    height: 100vh;
    overflow: scroll;
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Header/>
            <Sidebar/>
            <StyledMain>
                <Outlet/>
            </StyledMain>
        </StyledAppLayout>
    );
}

export default AppLayout;