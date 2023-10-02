import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ContextNavigation } from "@context/contextNavigation";
import { TNavigation } from "@domain/types/TNavigation";

import HeaderLine from "@components/headerLine";
import MenuLogout from "@components/menuLogout";
import * as S from "./styles";

const ViewMessage = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);

  const { control, formState, handleSubmit, setValue } = useForm({
    defaultValues: {
      mail: "",
      pass: "",
      rememberLogin: true,
    },
  });

  return (
    <S.Container>
      <HeaderLine label={"cadastro de usuário"} />
      <S.Content></S.Content>
      <MenuLogout />
    </S.Container>
  );
};

export default ViewMessage;
