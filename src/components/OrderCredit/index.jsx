import picPayCard from "../../Images/picpay-card.png";
import { Container } from "./style";

function OrderCredit() {
  return (
    <Container>
      <div>
        <h2>
          PicPay Card: seu cartão que é débito, crédito, totalmente gratuito, do
          PicPay
        </h2>
        <p>
          Usando seu cartão de crédito e débito físico ou virtual, você paga
          tudo e todos e ainda pode parcelar no crédito. Além disso, você ainda
          pode ganhar cashback, ou seja, dinheiro de volta.
        </p>

        <button>pedir cartão de crédito</button>
      </div>

      <figure>
        <img src={picPayCard} alt="cartão Pic Pay" />
      </figure>
    </Container>
  );
}

export default OrderCredit;
