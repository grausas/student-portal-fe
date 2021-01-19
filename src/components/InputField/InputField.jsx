import React from "react";
import * as S from "./InputField.style";
import PropTypes from "prop-types";

function InputField({
  type,
  name,
  labelText,
  IconClassName,
  inputId,
  placeholder,
  required,
  minLength,
  maxLength,
  handleChange,
  options,
  defaultValue,
}) {
  switch (type) {
    case "longtext":
      return (
        <>
          <S.Label htmlFor={inputId}>{labelText}</S.Label>
          <S.TextArea
            id={inputId}
            placeholder={placeholder}
            onChange={handleChange}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
          ></S.TextArea>
        </>
      );
    case "email":
      return (
        <>
          <S.Label htmlFor={inputId}>{labelText}</S.Label>
          <S.InputDiv>
            <S.Icon className="fas fa-envelope" />
            <S.Input
              type="email"
              name={name}
              id={inputId}
              defaultValue={defaultValue}
              placeholder={placeholder}
              minLength={minLength}
              maxLength={maxLength}
              required={required}
              onChange={handleChange}
            />
          </S.InputDiv>
        </>
      );
    case "password":
      return (
        <>
          <S.Label htmlFor={inputId}>{labelText}</S.Label>
          <S.InputDiv>
            <S.Icon className="fas fa-lock" />
            <S.Input
              type="password"
              name={name}
              placeholder={placeholder}
              minLength={minLength}
              maxLength={maxLength}
              required={required}
              onChange={handleChange}
            />
          </S.InputDiv>
        </>
      );
    case "dropdown":
      return (
        <>
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
        </>
      );
    default:
      return (
        <>
          <S.Label htmlFor={inputId}>{labelText}</S.Label>
          <S.InputDiv>
            <S.Icon className={IconClassName}></S.Icon>
            <S.Input
              type="text"
              id={inputId}
              name={name}
              defaultValue={defaultValue}
              placeholder={placeholder}
              required={required}
              minLength={minLength}
              maxLength={maxLength}
              onChange={handleChange}
            />
          </S.InputDiv>
        </>
      );
  }
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  labelText: PropTypes.string,
  IconClassName: PropTypes.string,
  inputId: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  handleChange: PropTypes.func,
  options: PropTypes.array,
};

export default InputField;
