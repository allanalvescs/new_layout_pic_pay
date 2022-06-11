import { Container } from "./style";

function MenuFooter({ name, array }) {
  return (
    <Container>
      <h3>{name}</h3>
      {array.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </Container>
  );
}

export default MenuFooter;
