import {
  FaRegBuilding,
  FaRegCreditCard,
  FaRegQuestionCircle,
} from "react-icons/fa";

import { FiUser } from "react-icons/fi";

import { RiDashboardFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { useNavegation } from "../../Providers/NavPages";

import { Indicator, NavegationCustomizer } from "./style";

function Navegation() {
  const { page, handleFocus } = useNavegation();
  const history = useHistory();

  return (
    <NavegationCustomizer page={page.page}>
      <ul>
        <li
          onClick={() => {
            handleFocus("/dash", -2.1);
            history.push("/dash");
          }}
        >
          <span>
            <RiDashboardFill color="var(--color-light)" />
          </span>
          <p>Dashboard</p>
        </li>
        <li
          onClick={() => {
            handleFocus("/company", -1.1);
            history.push("/company");
          }}
        >
          <span>
            <FaRegBuilding color="var(--color-light)" />
          </span>
          <p>Empresa</p>
        </li>
        <li
          onClick={() => {
            handleFocus("/client", 0);
            history.push("/client/allan");
          }}
        >
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
