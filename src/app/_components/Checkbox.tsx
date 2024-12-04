"use client";

import styles from "@/styles/components/inputs.module.scss";
type Props = {
  size: string;
  state: string;
  text?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  properties: {
    id: string;
    checked: boolean;
    disabled?: boolean;
  };
};
export default function Checkbox({ text, size, state, properties, onChange }: Props) {
  return (
    <div className={`${styles.checkbox} ${styles[size]} ${styles[state]}`}>
      <input type="checkbox" id={properties.id} disabled={properties.disabled} checked={properties.checked} onChange={onChange} />
      <label htmlFor={properties.id} className={`${styles[size]} ${styles[state]}`}>
        {text}
      </label>
    </div>
  );
}
