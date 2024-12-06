import styles from "@/styles/components/alarm.module.scss";
import { ReactNode, useState } from "react";
type Props = {
  children: ReactNode;
  text: string;
  position: string;
  arrow?: boolean;
};
export default function Tooltip({ children, text, position, arrow }: Props) {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  return (
    <div className={styles.tooltip_container}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.tooltip_trigger}>
        {children}
      </div>
      {visible && <div className={`${styles.tooltip_box} ${styles[position]} ${arrow && styles.arrow}`}>{text}</div>}
    </div>
  );
}
