import styled from "styled-components"

import DynamicElement from "../../DynamicElement"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LearningObjectives = ({ contents }) => {
  return (
    <Container>
      {contents.map((content, i) => (
        <DynamicElement key={i} content={content} />
      ))}
    </Container>
  )
}

export default LearningObjectives