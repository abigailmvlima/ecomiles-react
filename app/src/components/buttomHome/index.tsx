import React from "react";
import { TouchableOpacity } from "react-native";
import * as St from "./styles";

interface iProps {
  title: string;
  icon: any;
  onPress?: any;
  textCenter?: boolean;
  textTransform?: string;
}

const ButtomHome = (props: iProps) => {
  const { title, onPress } = props;
  return (
    <St.Container {...props}>
      <TouchableOpacity onPressOut={onPress}>
        <St.Title {...{ textTransform: props.textTransform }}>{title}</St.Title>
        <St.Icon>{props.icon && <props.icon />}</St.Icon>
      </TouchableOpacity>
    </St.Container>
  );
};

export { ButtomHome };
