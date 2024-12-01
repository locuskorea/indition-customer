import styles from "@/styles/components.module.scss";
import Image from "next/image";
export default function Buttons({ text, img, size, color }) {
  return (
    <button className={`${styles.buttons} ${styles[size]} ${styles[color]}`}>
      <Image src={img} alt="" width={24} height={24} />
      <span>{text}</span>
    </button>
  );
}
