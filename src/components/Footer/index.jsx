import PicPayLight from "../../Images/pic_pay_light.png";
import ListSocial from "../ListSocial";
import MenuFooter from "../MenuFooter";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img src={PicPayLight} alt="logo Pic Pay" />
          <p>Todo mundo usa todo lugar aceita</p>
        </div>
        <ListSocial />
      </div>

      <div>
          <MenuFooter name="Menu" array={["Inicio","Dashboard","Empresa","Cliente","Cartão","Faqs"]}/>
          <MenuFooter name="Para Você" array={["Parcelar Boletos","PicPay Card","Faça um Pix","Rebdimentos","Pague com PicPay"]}/>
          <MenuFooter name="Para Empresa" array={["Para seu negócio","PicPay Pro","PicPay EMpresa","PicPay e-commerce"]}/>
          <MenuFooter name="Central de Ajuda" array={["Fale com a gente","Para você","Para seu negócio","Regulamentos", "Ouvidoria"]}/>
          <MenuFooter name="Veja Mais" array={["Blog", "Open Ranking","Tudo sobre BR code","Portal do Desenvolvedor"]}/>
      </div>

    </footer>
  );
}

export default Footer;
