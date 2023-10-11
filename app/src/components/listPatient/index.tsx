import { ContextNavigation } from "@context/contextNavigation";
import { TListPacient } from "@domain/types/TListPacient";
import { TNavigation } from "@domain/types/TNavigation";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import * as St from "./styles";

interface iProps {
  data: TListPacient[];
  onPress?: any;
}

const ListPatient = (props: iProps) => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { data, onPress } = props;

  return (
    <St.Base>
      {data.map((patient: TListPacient, key: number) => (
        <St.Container {...props}>
          <TouchableOpacity
            onPressOut={() => {
              route.cadPaient(patient);
            }}
            key={key}
          >
            <St.Title>{patient.name.title}</St.Title>
            <St.Texts>{`${patient.phone.title || ""} ${
              patient.birthDate.title || ""
            } ${patient.city.title || ""}`}</St.Texts>
            <St.Texts>{`${patient.email?.title || ""} `}</St.Texts>
          </TouchableOpacity>
        </St.Container>
      ))}
    </St.Base>
  );
};

export { ListPatient };
