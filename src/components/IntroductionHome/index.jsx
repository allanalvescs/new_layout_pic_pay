import PosterDonwloadApp from "../../Images/ImageDonwload.png";
import { BoxImage, Container } from "./style";

function IntroductionHome() {
  return (
    <Container>
      <BoxImage>
        <img
          src={PosterDonwloadApp}
          alt="pessoa usando o celular no meio da rua baixando o app do Pic Pay"
        />
      </BoxImage>

      <div>
        <h2>Descubra o universo de facilidades do PicPay</h2>

        <article>
          <p>
            Com o PicPay é assim: pode parcelar seus boletos em até 12x, ter uma
            conta digital segura e gratuita, cartão de crédito sem anuidade e
            ainda ganhar dinheiro de volta em suas compras.
          </p>
        </article>

        <button>Baixa o App</button>
      </div>
    </Container>
  );
}

export default IntroductionHome;
