import { EInputType } from "@domain/enum/EInputType";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import * as St from "./styles";

type TValue = string | undefined;

interface propState {
  name: string;
  label: string;
  type?: EInputType;
  placeholder?: string;
  messageErrorText?: string;
  value?: TValue;
  secureTextEntry?: boolean;
  isLowerCase?: boolean;
  isRequired?: boolean;
  onKeyPress?: (e: any) => void;
}

enum EMaxLength {
  name = 38,
}
const InputForm = ({ type = EInputType.text, ...props }: propState) => {
  const { control, setError, clearErrors, formState } = useFormContext();
  const { errors } = formState;
  const { isRequired, messageErrorText } = props;

  const onMasText = (text: string) => {
    if (!text) return "";

    if (type === EInputType.name) {
      console.log(123, text);
      const formattedText = text.replace(/[^a-zA-Z\s]/g, "");
      const formattedValue = formattedText.replace(
        /\w\S*/g,
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );

      if (formattedValue.length > EMaxLength[EInputType.name] - 1) {
        setError(props.name, {
          type: "maxLength",
          message: "Exceeded maximum length (20 characters)",
        });
      } else {
        clearErrors(props.name);
      }

      return formattedValue;
    } else if (type === EInputType.cpf) {
      let numericText = text.replace(/\D/g, "");

      if (numericText.length > 11) {
        numericText = numericText.substring(0, 11);
      }

      const formattedText = numericText.replace(
        /^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/,
        (_, a, b, c, d) => {
          let result = "";
          if (a) result += a + ".";
          if (b) result += b + ".";
          if (c) result += c + "-";
          if (d) result += d;
          return result;
        }
      );

      return formattedText;
    } else if (type === EInputType.phone) {
      let numericText = text.replace(/\D/g, "");

      if (numericText.length > 11) {
        numericText = numericText.substring(0, 11);
      }

      const formattedText = numericText.replace(
        /^(\d{0,2})(\d{0,5})(\d{0,4})$/,
        (_, a, b, c) => {
          let result = "";
          if (a) result += `(${a}`;
          if (b) result += `) ${b}`;
          if (c) result += `-${c}`;
          return result;
        }
      );

      return formattedText;
    } else if (type === EInputType.birthDate) {
      let numericText = text.replace(/\D/g, "");

      if (numericText.length > 8) {
        numericText = numericText.substring(0, 8);
      }

      const formattedText = numericText.replace(
        /^(\d{0,2})(\d{0,2})(\d{0,4})$/,
        (_, a, b, c) => {
          let result = "";
          if (a) result += `${a}`;
          if (b) result += `/${b}`;
          if (c) result += `/${c}`;
          return result;
        }
      );

      return formattedText;
    }

    return text;
  };

  return (
    <St.Container>
      <St.Content>
        <Controller
          control={control}
          rules={{
            required: isRequired,
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <St.Base>
                <St.Label>{props.label}</St.Label>
                <St.Input
                  secureTextEntry={props.secureTextEntry || false}
                  placeholder={props.placeholder || ""}
                  onChangeText={(text: string) => {
                    onChange(onMasText(text));
                  }}
                  value={value}
                  autoCapitalize={"sentences"}
                  maxLength={EMaxLength[EInputType.name]}
                />
              </St.Base>
            );
          }}
          name={props.name}
        />
      </St.Content>
      {/* <St.ErrorText>{getErros()}</St.ErrorText> */}
    </St.Container>
  );
};

InputForm.defaultProps = {
  messageErrorText: "Campo obrigatório",
  isRequired: false,
};

export { InputForm };
