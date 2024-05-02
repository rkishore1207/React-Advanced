import styled from "styled-components";
import { ButtonApp } from "./ui/Button";
import GlobalStyle from "./styles/GlobalStyles";
import Heading from "./ui/Heading";


const StyledApp = styled.div`
  background-color: orangered;
  margin: 1rem;
  padding:2rem;
`;


function App() {

  return (
    <>
      <GlobalStyle/>
      <StyledApp>
        <Heading as={'h1'}>Hello World!</Heading>
        <Heading as={'h2'}>Check In</Heading>
        <Heading as={'h3'}>Check Out</Heading>
        <ButtonApp>Check In</ButtonApp>
        <ButtonApp>Check Out</ButtonApp>
      </StyledApp>
    </>
  )
}

export default App;
