import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ContextNavigation } from "@context/contextNavigation";
import { TNavigation } from "@domain/types/TNavigation";

import { ButtomArrow } from "@components/buttomArrow";
import HeaderLine from "@components/headerLine";
import { LinkForm } from "@components/linkForm";
import Title from "@components/title";
import { ETypeArrowDirection } from "@domain/enum/ETypeArrow";
import { EColorType, ETitleSize } from "@domain/types/TStyles";
import * as St from "./styles";

const ViewRegisterCompanyStep1 = () => {
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
        </St.ContentBase>
        <St.Footer>
          <ButtomArrow
            type={ETypeArrowDirection.left}
            onPress={route.register}
          />
          <St.RedirectsBase>
            <LinkForm title={"esqueci minha senha"} />
            <LinkForm title={"esqueci meu usuário"} />
          </St.RedirectsBase>
        </St.Footer>
      </St.Content>
    </St.Container>
  );
};

export default ViewRegisterCompanyStep1;
