import styled from "styled-components"

import MenuItem from "./MenuItem"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 6rem);
  width: fit-content;
  padding: 1rem;
  background-color: #43C0F6;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
`

const Sidebar = ({ items }) => {
  return (
    <Container>
      {items.map((item, i) => {
        return <MenuItem key={i} item={item} />
      })}
    </Container>
  )
}

export default Sidebar