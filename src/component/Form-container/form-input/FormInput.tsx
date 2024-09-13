import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface IFromInputProps {
  placeholder: string;
  errorMsg?: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
}

const FormInput = (props: IFromInputProps) => {
  return (
    <>
      <div
        className={props.errorMsg ? "form-input error" : "form-input"}
        data-required={props.required}
      >
        <input
          type="text"
          placeholder={props.placeholder}
          {...props.register}
        />
        {props.errorMsg && <div className="error-msg">{props.errorMsg}</div>}
        {props.required && (
          <div className="required-sign">
            <span>*</span>
          </div>
        )}
      </div>
    </>
  );
};

export default FormInput;
