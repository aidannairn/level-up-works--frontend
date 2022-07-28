import styled from 'styled-components'

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 4rem;
  height: 3.5rem;
  background-color: white;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Button = styled.div`
  width: 11rem;
  padding: 0.25rem 0;
  margin-right: 0.5rem;
  height: fit-content;
  padding: 0.5rem 0.25rem;
  border-radius: 0.25rem;
  box-shadow: 2px 2px 6px #c1c1c1;
  text-align: center;
  background-color: ${props => props.bgCol || '#E6AB2C'};
  color: white;
  font-weight: bold;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

const Navbar = () => {
  return (
    <NavbarWrapper>
      <img src="https://cdn.filestackcontent.com/mEK2iFTfSR61gX6b7Bj8" alt="LevelUp Works logo" />
      <ButtonContainer>
        <Button>Take Screenshot</Button>
        <Button bgCol='#F91D85' >Ask Teacher for help</Button>
        <Button bgCol='#43C0F6' >More Projects</Button>
      </ButtonContainer>
    </NavbarWrapper>
    
  )
}

export default Navbar