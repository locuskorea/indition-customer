"use client";
import { SetStateAction, useState } from "react";
import styles from "@/styles/components/inputs.module.scss";
import Image from "next/image";
type Props = {
  size: string;
  status?: string;
  appearance: string;
  img1?: string;
  img2?: string;
  isError?: boolean;
  inputProps: {
    value: string | null;
    name: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | React.Dispatch<SetStateAction<string>> | null;
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void | null;
    disabled?: boolean;
  };
  resetFunc: (e: string) => void;
};
export default function TextInput({ size, appearance, img1, img2, status, inputProps, resetFunc, isError }: Props) {
  const [isFocus, setIsFocus] = useState(false);

  const onClickReset = (e) => {
    e.stopPropagation();
    resetFunc(inputProps.name);
  };
  return (
    <div className={styles.text_input_root}>
      {img1 && <Image src={img1} alt="" width={24} height={24} />}
      <input
        className={`${styles.text_input} ${styles[size]} ${styles[appearance]} ${styles[status]} ${img1 && styles.is_image}`}
        {...inputProps}
        value={inputProps?.value[inputProps.name]}
        autoComplete="off"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <div>
        {isFocus && inputProps?.value[inputProps.name] && <Image src={`/icons/inputs/input_cancel.svg`} alt="" width={16} height={16} onClick={onClickReset} onMouseDown={(e) => e.preventDefault()} />}
        {img2 && <Image src={img2} alt="" width={24} height={24} />}
        {!isFocus && inputProps?.value[inputProps.name] && <Image src={`/icons/inputs/input_check_circle.svg`} alt="" width={16} height={16} />}
        {isError && inputProps?.value[inputProps.name] && <Image src={`/icons/inputs/input_error.svg`} alt="" width={16} height={16} />}
      </div>
    </div>
  );
}
