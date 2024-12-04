"use client";
import styles from "@/styles/components/buttons.module.scss";
import Image from "next/image";
type Props = {
  text?: string;
  img?: string;
  size: string;
  color: string;
  disabled?: boolean;
};
export default function Buttons({ text, img, size, color, disabled }: Props) {
  return (
    <button className={`${styles.buttons} ${styles[size]} ${styles[color]} ${text == "" && styles.no_text}`} disabled={disabled}>
      {img && <Image src={img} alt="" width={18} height={18} />}
      <span>{text}</span>
    </button>
  );
}
