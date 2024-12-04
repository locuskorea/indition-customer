"use client";
import { SetStateAction } from "react";
import styles from "@/styles/components/inputs.module.scss";
type Props = {
  size: string;
  status?: string;
  appearance: string;
  inputProps: {
    value: string | null;
    name: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | React.Dispatch<SetStateAction<string>> | null;
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void | null;
    disabled?: boolean;
  };
};
export default function TextField({ size, appearance, status, inputProps }: Props) {
  return <input className={`${styles.text_field} ${styles[size]} ${styles[appearance]} ${styles[status]}`} {...inputProps} autoComplete="off" />;
}
