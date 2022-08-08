const DynamicElement = ({ content }) => {
  const {
    elementType,
    elementContent,
    elementJSON
  } = content

  switch (elementType) {
    case 'h3':
      return <h3>{elementContent}</h3>
    case 'p':
      return <p>{elementContent}</p>
    case 'img':
      return <img src={elementContent} />
    default:
      break;
  }
}

export default DynamicElement