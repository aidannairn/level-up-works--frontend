import styled from "styled-components"

import Navbar from "./components/navbar/Navbar"

const AppContainer = styled.div`
  background-color: #B2E4FA;
  min-height: 100vh;
`

const App = () => <AppContainer>
    <Navbar />
</AppContainer>

export default App
