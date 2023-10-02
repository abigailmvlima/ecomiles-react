import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ContextNavigation } from "@context/contextNavigation";
import { TNavigation } from "@domain/types/TNavigation";

import { ButtomArrow } from "@components/buttomArrow";
import HeaderLine from "@components/headerLine";
import { LinkForm } from "@components/linkForm";
import Title from "@components/title";
import { ETypeArrowDirection } from "@domain/enum/ETypeArrow";
import { EColorType, ETitleSize } from "@domain/types/TStyles";

import { InputForm } from "@components/inputForm";
import { EInputType } from "@domain/enum/EInputType";
import * as St from "./styles";

const ViewRegisterPersonStep1 = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);

  const methods = useForm({
    defaultValues: {
      mail: "",
      pass: "",
      rememberLogin: true,
    },
  });

  return (
    <St.Container>
      <HeaderLine label={"cadastro de empreendedor"} />
      <St.Content>
        <St.ContentBase>
          <St.Title1>
            <Title label="Abra o seu agora nova conta!" size={ETitleSize.s5} />
          </St.Title1>
          <St.Title2>
            <Title
              label="Agora, precisamos de alguns detalhes seus."
              size={ETitleSize.s2}
              colorType={EColorType.m2}
            />
          </St.Title2>

          <St.Form>
            <FormProvider {...methods}>
              <InputForm
                type={EInputType.name}
                name={"name"}
                placeholder={"informe o nome"}
              />
            </FormProvider>
            {/* <InputForm
              type={EInputType.cpf}
              isLowerCase={true}
              name={"cpf"}
              placeholder={"informe o cpf"}
            />

            <InputForm
              type={EInputType.mail}
              isLowerCase={true}
              name={"mail"}
              placeholder={"informe o email"}
            />

            <InputForm
              type={EInputType.passAndConfirm}
              isLowerCase={true}
              name={"password"}
              placeholder={"informe o password"}
            /> */}
          </St.Form>
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

export default ViewRegisterPersonStep1;
