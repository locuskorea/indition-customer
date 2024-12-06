import styles from "@/styles/components/inputs.module.scss";
import Image from "next/image";
import { useState } from "react";
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
  appreance: string;
  inputProps: InputProps;
};
export default function PasswordInput({ img1, img2, appreance, inputProps, size, resetFunc, onKeyUp }: Props) {
  const [isFocus, setIsFocus] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isVisibility, setIsVisibility] = useState(false);
  const onClickClearInput = () => {
    resetFunc(inputProps.name);
  };
  return (
    <div className={`${styles.password_input} ${styles[size]}`}>
      {img1 && <Image src={img1} alt="" width={24} height={24} />}
      <input
        type={isVisibility ? "text" : "password"}
        className={`${styles[appreance]} ${styles[size]} ${img1 ? styles.image : styles.no_image}`}
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
        {!isFocus && inputProps.value[inputProps.name] && appreance != "error" && <Image src={`/icons/inputs/input_check_circle.svg`} alt="" width={20} height={20} />}
        {isVisibility ? (
          <Image src={`/icons/inputs/input_visibility_off.svg`} alt="" width={20} height={20} onClick={() => setIsVisibility(false)} onMouseDown={(e) => e.preventDefault()} />
        ) : (
          <Image src={`/icons/inputs/input_visibility_on.svg`} alt="" width={20} height={20} onClick={() => setIsVisibility(true)} onMouseDown={(e) => e.preventDefault()} />
        )}
        {appreance == "error" && !isFocus && <Image src={`/icons/inputs/input_error.svg`} alt="" width={20} height={20} />}
      </div>
    </div>
  );
}
