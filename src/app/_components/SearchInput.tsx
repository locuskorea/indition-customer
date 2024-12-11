"use client";
import { SetStateAction, useEffect, useState } from "react";
import styles from "@/styles/components/inputs.module.scss";
import Image from "next/image";
import regCheck from "../_functions/reg";
type Props = {
  size: string;
  status?: string;
  appearance: string;
  img1?: string;
  img2?: string;
  inputProps: {
    value: string | null;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | React.Dispatch<SetStateAction<string>> | null;
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void | null;
    disabled?: boolean;
  };
  resetFunc: (e: string) => void;
  style?: React.CSSProperties;
};
export default function SearchInput({ size, appearance, img1, img2, status, inputProps, resetFunc, style }: Props) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const onClickReset = (e) => {
    e.stopPropagation();
    resetFunc("");
  };
  console.log(isFocus, inputProps.value);
  return (
    <div className={styles.text_input_root}>
      <div className={styles.text_input} style={{ ...style }}>
        {img1 && <Image src={img1} alt="" width={24} height={24} />}
        <input
          className={`${styles.text_input} ${styles[size]} ${styles[appearance]} ${styles[status]} ${img1 && styles.is_image} `}
          {...inputProps}
          value={inputProps?.value}
          autoComplete="off"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <div>
          {isFocus && inputProps?.value && <Image src={`/icons/inputs/input_cancel.svg`} alt="" width={16} height={16} onClick={onClickReset} onMouseDown={(e) => e.preventDefault()} />}
          {img2 && <Image src={img2} alt="" width={24} height={24} />}
          {!isFocus && inputProps?.value && <Image src={`/icons/inputs/input_check_circle.svg`} alt="" width={16} height={16} />}
        </div>
      </div>
    </div>
  );
}
