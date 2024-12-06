import Image from "next/image";
import styles from "@/styles/components/inputs.module.scss";
import { useState } from "react";
export default function TextField({ inputProps, resetFunc }) {
  const [isFocus, setIsFocus] = useState(false);
  console.log(inputProps.value[inputProps.name]);
  const onClickClearInput = () => {
    resetFunc(inputProps.name);
  };
  return (
    <div className={styles.text_field}>
      <textarea onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} {...inputProps} value={inputProps.value[inputProps.name]} />
      {isFocus && inputProps.value[inputProps.name] && <Image src={`/icons/inputs/input_cancel.svg`} alt="" width={16} height={16} className={styles.clear} onClick={onClickClearInput} onMouseDown={(e) => e.preventDefault()} />}
      {!isFocus && inputProps.value[inputProps.name] && <Image src={`/icons/inputs/input_check_circle.svg`} alt="" width={16} height={16} className={styles.clear} />}
    </div>
  );
}
