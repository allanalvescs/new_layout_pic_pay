import MEI from "../../Images/mei.jpeg";
import Startup from "../../Images/startup.jpeg";
import BigCompany from "../../Images/bigcompany.jpeg";
import { Container, ConteinerList } from "./style";

function BuildCompany() {
  return (
    <Container>
      <h2>
        A solução para todo tipo de negócio: receber de forma descomplicada
        direto pelo celular
      </h2>
      <ConteinerList>
        <ul>
          <li>
            <img src={MEI} alt="" />
            <h3>Microempreendedor individual (MEI)</h3>
            <p>ex: comerciantes, costureira,freelancers, fotógrafos, etc.</p>
          </li>
          <li>
            <img src={Startup} alt="" />
            <h3>Pequenas Empresas</h3>
            <p>
              ex: restaurantes, lojas de roupa,salão de beleza, sorveteria, etc.
            </p>
          </li>
          <li>
            <img src={BigCompany} alt="" />
            <h3>Grandes Empresas</h3>
            <p>
              ex: lojas de departamento, rede de restaurantes, supermercados,
              etc.
            </p>
          </li>
        </ul>

        <p>Começe a receber agora com PicPay Empresas</p>

        <button>Cadastre-se</button>
      </ConteinerList>
    </Container>
  );
}

export default BuildCompany;
