import IntroductionHome from "../../components/IntroductionHome";
import OrderCredit from "../../components/OrderCredit";
import { Main } from "../../style/style";

function HomePage() {
  return (
    <Main>
      <IntroductionHome />
      <OrderCredit />
    </Main>
  );
}

export default HomePage;
