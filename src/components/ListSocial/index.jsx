import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { Container } from "./style.js";

function ListSocial() {
  return (
    <Container>
      <li>
        <FaInstagram color="var(--color-light)" />
      </li>
      <li>
        <FaFacebookF color="var(--color-light)" />
      </li>
      <li>
        <FaLinkedinIn color="var(--color-light)" />
      </li>
      <li>
        <FaTwitter color="var(--color-light)" />
      </li>
    </Container>
  );
}

export default ListSocial;
