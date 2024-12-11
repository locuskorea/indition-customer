import styles from "./auth_component.module.scss";
import Image from "next/image";
export default function LogoHeader() {
  return (
    <div className={styles.logo_header}>
      <Image src={`/icons/photo.svg`} alt="" width={20} height={20} />
      <p>INDITION</p>
    </div>
  );
}
