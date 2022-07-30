import styled from "styled-components"
import Sidebar from "./sidebar/Sidebar"

const Container = styled.div`
  background-color: #B2E4FA;
  min-height: 100%;
`

const UserDashboard = ({ items }) => {
  return (
    <Container>
      <Sidebar items={items} />
    </Container>
  )
}

export default UserDashboard