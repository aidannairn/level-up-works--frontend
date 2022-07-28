import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  margin-left: 1rem;
  `
  
  const Headings = styled.div`
  display: flex;
  width: 6rem;
  flex-direction: column;
`

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
`

const Circle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.25rem;
  border: 3px solid #43C0F6;
  border-radius: 1rem;
  box-shadow: 1px 1px 3px 1px#b5b5b5;
  box-sizing: unset;
  cursor: pointer;

  :hover {
    background-color: rgb(218, 248, 250);
  }
`

const ActiveCircle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0.25rem;
  text-align: center;
  font-family: Nunito;
  font-weight: 900;
  background-color: #fdf7c0;
  color: #707070;
  background: radial-gradient(circle, rgba(221,214,154,1) 0%, rgba(253,247,192,1) 63%);
  border: 3px solid #43C0F6;
  border-radius: 1rem;
  box-shadow: 1px 1px 3px 1px#b5b5b5;
  box-sizing: unset;
  cursor: default;

  h3 {
    font-weight: 900;
    margin: 0;
  }
`

const ProjectBar = ({totalProjects = 15, heading = 'Introduction'}) => {
  /* ES6 Syntax to create an array with X amount of undefined items. 
  This array will be mapped through to display the circles. */
  const circles = [...Array(totalProjects)]

  return (
    <Container>
      <Headings>
        <h3>PROJECT</h3>
        <h5>{heading.length > 17 ? heading.slice(0, 14) + '...' : heading}</h5>
      </Headings>
      <CircleContainer>
        {circles.map((_circle, i) => {
          return i === 0 ? <ActiveCircle key={`${i}[ACTIVE]`} ><h3>{++i}</h3></ActiveCircle> : <Circle key={i} />
        })}
      </CircleContainer>
    </Container>
  )
}

export default ProjectBar