import {
  FaRegBuilding,
  FaRegCreditCard,
  FaRegQuestionCircle,
} from "react-icons/fa";

import { FiUser, FiSettings } from "react-icons/fi";
import { useNavegation } from "../../Providers/NavPages";

import { Indicator, NavegationCustomizer } from "./style";

function Navegation() {
  const { page, handleFocus } = useNavegation();
  return (
    <NavegationCustomizer page={page.page}>
      <ul>
        <li onClick={() => handleFocus("/setting", -2.1)}>
          <span>
            <FiSettings color="var(--color-light)" />
          </span>
          <p>Configurações</p>
        </li>
        <li onClick={() => handleFocus("/company", -1.1)}>
          <span>
            <FaRegBuilding color="var(--color-light)" />
          </span>
          <p>Empresa</p>
        </li>
        <li onClick={() => handleFocus("/client", 0)}>
          <span>
            <FiUser color="var(--color-light)" />
          </span>
          <p>Cliente</p>
        </li>
        <li onClick={() => handleFocus("/creditcard", 1)}>
          <span>
            <FaRegCreditCard color="var(--color-light)" />
          </span>
          <p>Cartão</p>
        </li>
        <li onClick={() => handleFocus("/faqs", 2.08)}>
          <span>
            <FaRegQuestionCircle color="var(--color-light)" />
          </span>
          <p>FAQS</p>
        </li>
        <Indicator move={page}></Indicator>
      </ul>
    </NavegationCustomizer>
  );
}

export default Navegation;
