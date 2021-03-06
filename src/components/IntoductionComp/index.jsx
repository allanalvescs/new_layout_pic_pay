import { Container, Intoducion } from "./style.js";

import PicPayCompany from "../../Images/picPay_company.png";

function IntroductionCompany() {
  return (
    <Container>
      <Intoducion>
        <h1>Comece a receber agora com o PicPay Empresas</h1>
        <p>
          Você controla, recebe pagamentos e, se for novo por aqui, tem{" "}
          <strong>30 dias de taxa zero.</strong>
        </p>

        <button>Cadastre-se Agora</button>
      </Intoducion>

      <figure>
        <img src={PicPayCompany} alt="" />
      </figure>
    </Container>
  );
}

export default IntroductionCompany;
