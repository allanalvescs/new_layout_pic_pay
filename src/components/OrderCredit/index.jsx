import whiteCredit from "../../Images/whiteCredit.png";

import blackCredit from "../../Images/darkCredit.png";
import { useTheme } from "../../Providers/Theme";
import { Container } from "./style";

function OrderCredit() {
  const { mode } = useTheme();

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
        <img
          src={mode === "light" ? blackCredit : whiteCredit}
          alt="cartão Pic Pay"
        />
      </figure>
    </Container>
  );
}

export default OrderCredit;
