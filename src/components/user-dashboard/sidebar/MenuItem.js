import styled from "styled-components"

const Container = styled.div`
  padding: 0.5rem 0;
  cursor: pointer;
`

const MenuItem = ({ item }) => {
  const { sidebarHeading } = item
  return (
    <Container>{sidebarHeading}</Container>
  )
}

export default MenuItem