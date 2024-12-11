import { ReactNode } from "react";
import styles from "@/styles/layout.module.scss";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function BeforeLoginLayout({ children }: Props) {
  return (
    <div className={styles.before_login_layout}>
      <div>{children}</div>
    </div>
  );
}
