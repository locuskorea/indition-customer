"use client";
import React, { ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, SetStateAction } from "react";
import styles from "@/styles/components/inputs.module.scss";
type Props = {
  size: string;
  state: string;
  text?: string;
  onChange: any;
  properties: {
    id: string;
    checked: boolean;
    disabled?: boolean;
  };
};
export default function Checkbox({ text, size, state, properties, onChange }: Props) {
  return (
    <div className={`${styles.checkbox} ${styles[size]} ${styles[state]}`}>
      <label htmlFor={""}>{text}</label>
      <input type="checkbox" properties={{ ...properties }} onChange={onChange} />
    </div>
  );
}
