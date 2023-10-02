import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ContextNavigation } from "@context/contextNavigation";
import { TNavigation } from "@domain/types/TNavigation";

import MenuLogout from "@components/menuLogout";
import * as S from "./styles";

const ViewCodeBar = () => {
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
      <S.Content></S.Content>
      <MenuLogout />
    </S.Container>
  );
};

export default ViewCodeBar;
