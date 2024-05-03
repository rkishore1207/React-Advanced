import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 30% 1fr;
    grid-template-rows: auto 1fr;
`;


const StyledMain = styled.main`
    padding: 1rem;
    background-color:blue;
    height: 100vh;
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