import { EInputType } from "@domain/enum/EInputType";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import * as St from "./styles";

type TValue = string | undefined;

interface propState {
  name: string;
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
  console.log(123, typeof errors, errors);
  const getIcon = () => {
    if (type === EInputType.password) {
      return <St.IconEyeClosed />;
    } else if (type === EInputType.mail) {
      return <St.IconEnvolope />;
    }
    return <St.IconEnvolope />;
  };

  const getErros = () => {
    if (!errors || Object.keys(!errors).length === 0) {
      return <></>;
    }

    if (!errors[props.name]) {
      return <></>;
    }

    return errors[props.name]?.message || messageErrorText;
  };

  if (!control) {
    return <></>;
  }

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
                {getIcon()}
                <St.Input
                  secureTextEntry={props.secureTextEntry || false}
                  placeholder={props.placeholder || ""}
                  onChangeText={(text: string) => {
                    if (type === EInputType.name) {
                      const formattedText = text.replace(/[^a-zA-Z\s]/g, "");
                      const formattedValue = formattedText.replace(
                        /\w\S*/g,
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      );

                      onChange(formattedValue);
                      if (
                        formattedValue.length >
                        EMaxLength[EInputType.name] - 1
                      ) {
                        setError(props.name, {
                          type: "maxLength",
                          message: "Exceeded maximum length (20 characters)",
                        });
                      } else {
                        clearErrors(props.name);
                      }
                      return true;
                    }
                    onChange(text);
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
      <St.ErrorText>{getErros()}</St.ErrorText>
    </St.Container>
  );
};

InputForm.defaultProps = {
  messageErrorText: "Campo obrigatório",
  isRequired: false,
};

export { InputForm };
