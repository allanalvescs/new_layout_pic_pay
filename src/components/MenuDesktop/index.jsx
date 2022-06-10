import { Link } from "react-router-dom";
import { Container } from "./style";

function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <Link>Dashboard</Link>
        </li>
        <li>
          <Link>Empresa</Link>
        </li>
        <li>
          <Link>Cliente</Link>
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
