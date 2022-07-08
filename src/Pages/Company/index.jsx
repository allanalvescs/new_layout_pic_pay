import BuildCompany from "../../components/BuildCompany";
import IntroductionCompany from "../../components/IntoductionComp";
import { Main } from "../../style/style";

function CompanyPage() {
  return (
    <Main>
      <IntroductionCompany />
      <BuildCompany />
    </Main>
  );
}

export default CompanyPage;
