import React from "react";
import * as S from "./InputField.style";

function InputField({
  type,
  name,
  labelText,
  inputId,
  placeholder,
  required,
  minLength,
  maxLength,
  handleChange,
  options,
}) {
  switch (type) {
    case "longtext":
      return (
        <div>
          <S.Label htmlFor={inputId}>{labelText}</S.Label>
          <S.TextArea
            id={inputId}
            placeholder={placeholder}
            onChange={handleChange}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
          ></S.TextArea>
        </div>
      );
    case "email":
      return (
        <div>
          <S.Label htmlFor={inputId}>{labelText}</S.Label>
          <S.Input
            type="email"
            name={name}
            id={inputId}
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
            onChange={handleChange}
          />
        </div>
      );
    case "password":
      return (
        <div>
          <S.Label htmlFor={inputId}>{labelText}</S.Label>
          <S.Input
            type="password"
            name={name}
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
            onChange={handleChange}
          />
        </div>
      );
    case "dropdown":
      return (
        <div>
          <S.Label htmlFor={inputId}>{labelText}</S.Label>
          <S.Select
            id={inputId}
            name={name}
            defaultValue
            required={required}
            onChange={handleChange}
          >
            <option disabled value>
              Select option
            </option>
            {options &&
              options.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.text}
                </option>
              ))}
          </S.Select>
        </div>
      );
    default:
      return (
        <div>
          <S.Label htmlFor={inputId}>{labelText}</S.Label>
          <S.Input
            type="text"
            id={inputId}
            name={name}
            placeholder={placeholder}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            onChange={handleChange}
          />
        </div>
      );
  }
}

export default InputField;
