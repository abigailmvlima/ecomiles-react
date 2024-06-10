import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

import * as S from "./styles";

import svg from "@assets/svg";
import { ButtonCancel } from "@components/buttonCancel";
import { ButtonGo } from "@components/buttonGo";
import { InputForm } from "@components/inputForm";
import { ContextNavigation } from "@context/contextNavigation";
import { ContextTheme } from "@context/contextTheme";
import { EInputPosition, EInputType } from "@domain/enum/EInput";
import { IContextTheme } from "@domain/interfaces/IContextTheme";
import { TNavigation } from "@domain/types/TNavigation";

const ViewRegister = () => {
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
          <S.BoxUser>
            <S.BoxUserUserName themeSelected={theme}>Abigail</S.BoxUserUserName>
            <S.BoxUserUserPoint themeSelected={theme}>
              abigail@email.com
            </S.BoxUserUserPoint>
            <S.BoxUserUserName themeSelected={theme}>Extrato</S.BoxUserUserName>
            <S.BoxUserUserPoint themeSelected={theme}>
              10.250 milhas
            </S.BoxUserUserPoint>
          </S.BoxUser>
        </S.Header>
        <S.Form>
          <FormProvider {...methods}>
            <InputForm
              position={EInputPosition.center}
              theme={theme}
              type={EInputType.mail}
              isLowerCase={true}
              name={"mail"}
              placeholder={"Email"}
            />
            <InputForm
              position={EInputPosition.center}
              theme={theme}
              type={EInputType.mail}
              isLowerCase={true}
              name={"mailConfirm"}
              placeholder={"Confirmar email"}
            />

            <InputForm
              position={EInputPosition.center}
              theme={theme}
              type={EInputType.password}
              isLowerCase={true}
              name={"password"}
              placeholder={"senha"}
            />
            <InputForm
              position={EInputPosition.center}
              theme={theme}
              type={EInputType.password}
              isLowerCase={true}
              name={"passwordConfirm"}
              placeholder={"Confirmar senha"}
            />
          </FormProvider>
        </S.Form>
        <S.Buttons>
          <S.ButtonGo>
            <ButtonGo theme={theme} label={"Salvar"} onPress={route.home} />
          </S.ButtonGo>
          <S.ButtomRegister>
            <ButtonCancel
              theme={theme}
              label={"Cancelar"}
              onPress={route.login}
            />
          </S.ButtomRegister>
        </S.Buttons>
      </S.Contents>
    </S.Container>
  );
};

export default ViewRegister;
