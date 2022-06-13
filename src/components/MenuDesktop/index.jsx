import { Link } from "react-router-dom";
import { Container } from "./style";

function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/dash">Dashboard</Link>
        </li>
        <li>
          <Link to="/company">Empresa</Link>
        </li>
        <li>
          <Link to="/client/user">Cliente</Link>
        </li>
        <li>
          <Link>Cartão</Link>
        </li>
        <li>
          <Link>FAQS</Link>
        </li>
      </ul>
    </Container>
  );
}

export default Menu;
