import React, { useState } from "react";
import { InputField, Button } from "../index";
import PropType from "prop-types";
import * as S from "./Form.style";

function Form({ fields, callback, buttonText, titleText }) {
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
          <S.InputWrapper>
            <InputField
              type={field.type}
              labelText={field.labelText}
              placeholder={field.placeholder}
              required={field.required}
              minLength={field.minLength}
              maxLength={field.maxLength}
              handleChange={(e) =>
                setFieldValues({ ...fieldValues, [field.name]: e.target.value })
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
