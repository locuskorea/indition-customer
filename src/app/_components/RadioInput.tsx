import styles from "@/styles/components/inputs.module.scss";
type Props = {
  state: string;
  text?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  properties: {
    id: string;
    name: string;
    checked: boolean;
    disabled?: boolean;
  };
};
export default function RadioInput({ state, text, properties, onChange }: Props) {
  return (
    <div className={`${styles.radio_input}  ${styles[state]}`}>
      <input type="radio" id={properties.id} checked={properties.checked} name={properties.name} disabled={properties.disabled} onChange={onChange} />
      <label htmlFor={properties.id} className={styles[state]}>
        {text}
      </label>
    </div>
  );
}
