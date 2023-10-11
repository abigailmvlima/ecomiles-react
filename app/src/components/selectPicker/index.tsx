import { TMaritalStatus } from "@domain/types/TFHIR";
import themes from "@themes/themes";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import * as St from "./styles";

interface propState {
  name: string;
  label: string;
  options: TMaritalStatus[];
  placeholder?: string;
  messageErrorText?: string;
  value?: any;
  isLowerCase?: boolean;
  isRequired?: boolean;
  onKeyPress?: (e: any) => void;
}

const SelectPicker = (props: propState) => {
  const { control } = useFormContext();

  const customStyles = {
    inputIOS: {
      fontSize: 16,
      color: themes.colors.v16,
      fontFamily: themes.fonts.Archivo_600SemiBold,
      fontWeight: 300,
      letterSpacing: 0.5,
    },
    inputAndroid: {
      fontSize: 16,
      color: themes.colors.v16,
      fontFamily: themes.fonts.Archivo_600SemiBold,
      fontWeight: 300,
      letterSpacing: 0.5,
    },
  };

  return (
    <Controller
      control={control}
      rules={{
        required: props.isRequired,
      }}
      render={({ field: { onChange, value } }) => (
        <St.Base>
          <St.Label>{props.label}</St.Label>
          <St.Input>
            <RNPickerSelect
              style={customStyles}
              doneText="Ok"
              placeholder={{
                label: value?.display || "Selecione",
                value: "",
              }}
              onValueChange={(itemValue) => onChange(itemValue)}
              value={value}
              items={props.options.map((option: TMaritalStatus) => ({
                label: option.display,
                value: option.code,
              }))}
              {...props}
            />
          </St.Input>
        </St.Base>
      )}
      name={props.name}
    />
  );
};

SelectPicker.defaultProps = {
  isRequired: false,
};

export default SelectPicker;
