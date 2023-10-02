import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ContextNavigation } from "@context/contextNavigation";
import { TNavigation } from "@domain/types/TNavigation";

import { ButtomForm } from "@components/buttomForm";
import { ButtomTitle } from "@components/buttomTitle";
import { InputForm } from "@components/inputForm";
import { LinkForm } from "@components/linkForm";
import MenuLogout from "@components/menuLogout";
import Title from "@components/title";
import { EInputType } from "@domain/enum/EInputType";
import { ETitleSize } from "@domain/types/TStyles";
import * as S from "./styles";

const ViewLogin = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);

  const methods = useForm({
    defaultValues: {
      mail: "",
      pass: "",
      rememberLogin: true,
    },
  });

  return (
    <S.Container>
      <S.Content>
        <S.RowLogo>
          <S.IconLogo />
        </S.RowLogo>
        <Title label="Acessos" />
        <FormProvider {...methods}>
          <InputForm
            type={EInputType.mail}
            isLowerCase={true}
            name={"mail"}
            placeholder={"informe o email"}
          />

          <InputForm
            type={EInputType.password}
            isLowerCase={true}
            name={"password"}
            placeholder={"informe o password"}
          />
        </FormProvider>

        <S.BottomAction>
          <S.BottomActionRisk>
            <LinkForm title={"esqueci minha senha"} />
            <LinkForm title={"esqueci meu usuário"} />
          </S.BottomActionRisk>
          <S.BottomActionBase>
            <ButtomForm title={"Entrar"} textTransform={"uppercase"} />
          </S.BottomActionBase>
        </S.BottomAction>

        <S.TitleRegister>
          <Title label="ou" size={ETitleSize.s2} />
        </S.TitleRegister>
        <S.TitleRegister>
          <ButtomTitle
            label="CADASTRE-SE"
            size={ETitleSize.s3}
            onPress={() => route.register()}
          />
        </S.TitleRegister>
      </S.Content>
      <MenuLogout />
    </S.Container>
  );
};

export default ViewLogin;
