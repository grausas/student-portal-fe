import React, { useState } from "react";
import { InputField, Button } from "../index";
import PropType from "prop-types";
import * as S from "./Form.style";

function Form({ fields, callback, buttonText, titleText, options }) {
  const [fieldValues, setFieldValues] = useState({});

  return (
    <S.FormBox>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          callback(fieldValues);
        }}
      >
        <S.FormTitle>{titleText}</S.FormTitle>
        {fields.map((field) => (
          <S.InputWrapper key={field.name}>
            <InputField
              inputId={field.name}
              type={field.type}
              key={field.name}
              name={field.name}
              labelText={field.labelText}
              placeholder={field.placeholder}
              required={field.required}
              minLength={field.minLength}
              maxLength={field.maxLength}
              options={options}
              handleChange={(e) =>
                setFieldValues({
                  ...fieldValues,
                  [field.name]: e.target.value,
                })
              }
            />
          </S.InputWrapper>
        ))}
        <Button>{buttonText}</Button>
      </S.Form>
    </S.FormBox>
  );
}

Form.propTypes = {
  fields: PropType.array,
  callback: PropType.func,
};

export default Form;
