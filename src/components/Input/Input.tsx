/* <<< INFORMATION >>>
 * label = Namnet som visas ovanför input-fältet.
 *   Exempel: "PASSWORD" eller "USERNAME"
 * htmlFor = Det som binder samman label och input-fältet (så klickar man på label:en så ställer sig markören i inputfältet).
 *    Exempel: "login-pwd-field" eller "login-user-field."
 * fieldType = "genPwd", "pwd" eller inget/valfritt. pwd genererar ett lösenordsfält, genPwd genererar ett
 * lösenordsgenereringsfält, och inget/valfritt skapar automatiskt ett "vanligt" input-fält utan krusiduller.
 *
 * Fullständigt exempel: <Input label="PASSWORD" htmlFor="login-pwd-field" fieldType="pwd" />
 */

import { useState } from 'react';
import './Input.scss';

function InsertTypeOfField({ htmlFor, fieldType }: InputProps) {
  const [isPasswordMasked, setIsPasswordMasked] = useState(true);

  if (fieldType === 'genPwd') {
    return (
      <div className="input-text-field-wrapper add-border">
        <input type="text" id={htmlFor} className="input-text-field remove-border" />
        <div className="icon-gen-pwd" onClick={() => generatePassword()}></div>
      </div>
    );
  } else if (fieldType === 'pwd') {
    let textOrDots: string, maskedOrNot: string, iconType: string;

    if (isPasswordMasked) {
      textOrDots = 'password';
      maskedOrNot = 'big-dots';
      iconType = 'icon-pwd-hidden';
    } else {
      textOrDots = 'text';
      maskedOrNot = '';
      iconType = 'icon-pwd-visible';
    }

    return (
      <div className="input-text-field-wrapper add-border">
        <input
          type={textOrDots}
          id={htmlFor}
          className={`input-text-field remove-border ${maskedOrNot}`}
        />
        <div
          className={iconType}
          onClick={() => {
            isPasswordMasked ? setIsPasswordMasked(false) : setIsPasswordMasked(true);
          }}
        ></div>
      </div>
    );
  } else {
    return <input type="text" id={htmlFor} className="input-text-field" />;
  }
}

function generatePassword() {}

type InputProps = {
  label: string;
  htmlFor: string;
  fieldType?: string;
};

export function Input(props: InputProps) {
  return (
    <form className="input-wrapper">
      <div className="input-sign">
        <label htmlFor={props.htmlFor} className="input-sign-text">
          {props.label}
        </label>
      </div>
      <InsertTypeOfField {...props} />
    </form>
  );
}
