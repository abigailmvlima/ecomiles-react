import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ContextNavigation } from "@context/contextNavigation";
import { TNavigation } from "@domain/types/TNavigation";

import { CardInfo } from "@components/CardInfo";
import { ButtomArrow } from "@components/buttomArrow";
import HeaderLine from "@components/headerLine";
import { LinkForm } from "@components/linkForm";
import Title from "@components/title";
import { ETypeArrowDirection } from "@domain/enum/ETypeArrow";
import { TCardInfo } from "@domain/types/TCardInfo";
import { EColorType, ETitleSize } from "@domain/types/TStyles";
import show from "@show/index";
import * as St from "./styles";

const mockCardInfo: TCardInfo[] = [
  {
    photo: require("../../assets/images/personPhoto.png"),
    title: "Pessoal",
    description:
      "permite realizar pagamentos de forma segura e pratica,  relatórios de comprovantes.",
    redirect: show.route.registerPersonStep1,
  },
  {
    photo: require("../../assets/images/companyPhoto.png"),
    title: "Empreendedor",
    description:
      "integração entre sistemas,  pagamentos para seus clientes, a geração de relatórios e diversas outras funcionalidades.",
    redirect: show.route.registerCompanyStep1,
  },
];

const ViewRegister = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);

  const { control, formState, handleSubmit, setValue } = useForm({
    defaultValues: {
      mail: "",
      pass: "",
      rememberLogin: true,
    },
  });

  return (
    <St.Container>
      <HeaderLine label={"cadastro de usuário"} />
      <St.Content>
        <St.ContentBase>
          <St.Title1>
            <Title label="Abra o seu agora nova conta!" size={ETitleSize.s5} />
          </St.Title1>
          <St.Title2>
            <Title
              label="Escolha o perfil da sua conta"
              size={ETitleSize.s2}
              colorType={EColorType.m2}
            />
          </St.Title2>
          <St.CardInfoBase>
            {mockCardInfo &&
              mockCardInfo.map((info: TCardInfo) => {
                return (
                  <St.CardInfo>
                    <CardInfo info={info} />
                  </St.CardInfo>
                );
              })}
          </St.CardInfoBase>
        </St.ContentBase>
        <St.Footer>
          <ButtomArrow type={ETypeArrowDirection.left} onPress={route.login} />
          <St.RedirectsBase>
            <LinkForm title={"esqueci minha senha"} />
            <LinkForm title={"esqueci meu usuário"} />
          </St.RedirectsBase>
        </St.Footer>
      </St.Content>
    </St.Container>
  );
};

export default ViewRegister;
