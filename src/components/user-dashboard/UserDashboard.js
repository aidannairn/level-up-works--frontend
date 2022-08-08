import { useState } from "react"
import styled from "styled-components"

import Sidebar from "./sidebar/Sidebar"

const Container = styled.div`
  display: flex;
  background-color: #B2E4FA;
  min-height: 100%;
`

const ItemContainer = styled.div`
  width: 100%;
  margin: 3rem 2rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #D8F2FD;
`

const UserDashboard = ({ items }) => {
  const [item, setItem] = useState(items[0])

  const ItemContent = item.component

  return (
    <Container>
      <Sidebar items={items} />
      <ItemContainer>
        <ItemContent contents={item.contents} />
      </ItemContainer>
    </Container>
  )
}

export default UserDashboard