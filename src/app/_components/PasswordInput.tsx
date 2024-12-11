import styles from "@/styles/components/inputs.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import regCheck from "../_functions/reg";
type InputProps = {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
};
type Props = {
  img1?: string;
  img2?: string;
  size: string;
  resetFunc: (e: React.MouseEventHandler<HTMLImageElement> | string | boolean) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  appearance: string;
  inputProps: InputProps;
  style?: React.CSSProperties;
  ValidationList?: boolean;
  label?: string;
  hint?: string;
};
export default function PasswordInput({ img1, img2, appearance, inputProps, size, resetFunc, hint, onKeyUp, ValidationList, style, label }: Props) {
  const [isFocus, setIsFocus] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isVisibility, setIsVisibility] = useState(false);
  const onClickClearInput = () => {
    resetFunc(inputProps.name);
  };
  const [isValid, setIsValid] = useState<{ eng: boolean; num: boolean; length: boolean }>({
    eng: false,
    num: false,
    length: false,
  });
  useEffect(() => {
    setIsValid({ eng: /^(?=.*[A-Za-z]).+$/.test(inputProps.value[inputProps.name]), num: /^(?=.*\d).+$/.test(inputProps.value[inputProps.name]), length: /^.{8,15}$/.test(inputProps.value[inputProps.name]) });
  }, [inputProps.value, inputProps.name]);
  return (
    <div className={styles.password_input_root}>
      {label && <span>{label}</span>}
      <div className={`${styles.password_input} ${styles[size]}`} style={{ ...style }}>
        {img1 && <Image src={img1} alt="" width={24} height={24} />}
        <input
          type={isVisibility ? "text" : "password"}
          className={`${styles[appearance]} ${styles[size]} ${img1 ? styles.image : styles.no_image} ${!regCheck("password", inputProps.value[inputProps.name]) && inputProps.value[inputProps.name].length > 0 && styles.error}`}
          {...inputProps}
          value={inputProps.value[inputProps.name]}
          autoComplete="new-password"
          onKeyUp={onKeyUp}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <div>
          {isFocus && inputProps.value[inputProps.name] && <Image src={`/icons/inputs/input_cancel.svg`} alt="" width={20} height={20} onClick={onClickClearInput} onMouseDown={(e) => e.preventDefault()} />}
          {img2 && <Image src={img2} alt="" width={24} height={24} />}
          {!isFocus && inputProps.value[inputProps.name] && regCheck("password", inputProps.value[inputProps.name]) && <Image src={`/icons/inputs/input_check_circle.svg`} alt="" width={20} height={20} />}
          {isVisibility ? (
            <Image src={`/icons/inputs/input_visibility_off.svg`} alt="" width={20} height={20} onClick={() => setIsVisibility(false)} onMouseDown={(e) => e.preventDefault()} />
          ) : (
            <Image src={`/icons/inputs/input_visibility_on.svg`} alt="" width={20} height={20} onClick={() => setIsVisibility(true)} onMouseDown={(e) => e.preventDefault()} />
          )}
          {!isFocus && inputProps.value[inputProps.name].length > 0 && !regCheck("password", inputProps.value[inputProps.name]) && <Image src={`/icons/inputs/input_error.svg`} alt="" width={20} height={20} />}
        </div>
      </div>

      {ValidationList && (
        <div className={styles.password_input_validation}>
          <div>
            {isValid.eng ? <Image src={`/icons/inputs/input_check_circle.svg`} alt="" width={20} height={20} /> : <Image src={`/icons/inputs/input_check_circle_gray.svg`} alt="" width={20} height={20} />}
            <p>영문 포함</p>
          </div>
          <div>
            {isValid.num ? <Image src={`/icons/inputs/input_check_circle.svg`} alt="" width={20} height={20} /> : <Image src={`/icons/inputs/input_check_circle_gray.svg`} alt="" width={20} height={20} />}
            <p>숫자 포함</p>
          </div>
          <div>
            {isValid.length ? <Image src={`/icons/inputs/input_check_circle.svg`} alt="" width={20} height={20} /> : <Image src={`/icons/inputs/input_check_circle_gray.svg`} alt="" width={20} height={20} />}
            <p>8~15자 이내</p>
          </div>
        </div>
      )}
    </div>
  );
}
