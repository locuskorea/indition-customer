"use client";
import styles from "@/styles/components/buttons.module.scss";
import Image from "next/image";
type Props = {
  text?: string;
  img1?: string;
  img2?: string;
  size: string;
  color: string;
  disabled?: boolean;
  style?: React.CSSProperties;
};
export default function Buttons({ text, img1, img2, size, color, disabled, style }: Props) {
  return (
    <button className={`${styles.buttons} ${styles[size]} ${styles[color]} ${text == "" && styles.no_text} ${img1 && img2 && styles.has_images}`} disabled={disabled} style={{ ...style }}>
      {img1 && <Image src={img1} alt="" width={18} height={18} />}
      <span>{text}</span>
      {img2 && <Image src={img2} alt="" width={18} height={18} />}
    </button>
  );
}
