import Image from "next/image";
import styles from "@/styles/components/inputs.module.scss";
import { useState } from "react";
export default function TextField() {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className={styles.text_field}>
      <textarea onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} />
      {isFocus && <Image src={`/icons/inputs/input_cancel.svg`} alt="" width={16} height={16} className={styles.clear} />}
      {!isFocus && <Image src={`/icons/inputs/input_check_circle.svg`} alt="" width={16} height={16} className={styles.clear} />}
    </div>
  );
}
