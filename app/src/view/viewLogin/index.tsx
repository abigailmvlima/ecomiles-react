import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

import * as S from "./styles";

import svg from "@assets/svg";
import { ButtonGo } from "@components/buttonGo";
import { ButtonLink } from "@components/buttonLink";
import { InputForm } from "@components/inputForm";
import { ContextNavigation } from "@context/contextNavigation";
import { ContextTheme } from "@context/contextTheme";
import { EInputPosition, EInputType } from "@domain/enum/EInput";
import { IContextTheme } from "@domain/interfaces/IContextTheme";
import { TNavigation } from "@domain/types/TNavigation";
import { ILogin } from "domains/interfaces/login";
import serviceAuth from "../../service/user.service";

const ViewLogin = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  const methods = useForm({
    defaultValues: {
      mail: "",
      pass: "",
      rememberLogin: true,
    },
  });

  return (
    <S.Container themeSelected={theme}>
      <S.Contents>
        <S.Header>
          <svg.LogoLogin />
        </S.Header>
        <S.Form>
          <FormProvider {...methods}>
            <InputForm
              position={EInputPosition.center}
              theme={theme}
              type={EInputType.mail}
              isLowerCase={true}
              name={"mail"}
              placeholder={"seuemail@email.com"}
            />

            <InputForm
              position={EInputPosition.center}
              theme={theme}
              type={EInputType.password}
              isLowerCase={true}
              name={"password"}
              placeholder={"************"}
            />
          </FormProvider>
        </S.Form>
        <S.Buttons>
          <S.ButtonGo>
            <ButtonGo
              theme={theme}
              label={"Entrar"}
              onPress={() => {
                const data: ILogin = methods.getValues();
                serviceAuth.onLogin(data, route.home);
              }}
            />
          </S.ButtonGo>
          <S.TextOr themeSelected={theme}>ou</S.TextOr>
          <S.ButtomRegister>
            <ButtonLink
              theme={theme}
              label={"Cadastre-se"}
              onPress={route.register}
            />
          </S.ButtomRegister>
        </S.Buttons>
      </S.Contents>
    </S.Container>
  );
};

export default ViewLogin;
