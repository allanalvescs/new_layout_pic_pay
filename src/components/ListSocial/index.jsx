import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function ListSocial() {
  return (
    <ul>
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
    </ul>
  );
}

export default ListSocial;
