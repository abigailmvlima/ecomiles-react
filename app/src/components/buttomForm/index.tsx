import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as St from './styles';

interface iProps {
  title: string;
  onPress?: any;
  textCenter?: boolean;
  textTransform?: string;
}

const ButtomForm = (props: iProps) => {
  const { title, onPress } = props;
  return (
    <St.Base>
      <St.Container {...props}>
        <TouchableOpacity onPressOut={onPress}>
          <St.Title {...{ textTransform: props.textTransform }}>{title}</St.Title>
        </TouchableOpacity>
      </St.Container>
    </St.Base>
  );
};

export { ButtomForm };
