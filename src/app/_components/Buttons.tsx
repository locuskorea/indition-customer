"use client";
import styles from "@/styles/components/buttons.module.scss";
import Image from "next/image";
import React from "react";
type Props = {
  text?: string;
  img1?: string;
  img2?: string;
  size: string;
  color: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export default function Buttons({ text, img1, img2, size, color, disabled, style, onClick }: Props) {
  return (
    <button className={`${styles.buttons} ${styles[size]} ${styles[color]} ${text == "" && styles.no_text} ${img1 && img2 && styles.has_images}`} disabled={disabled} style={{ ...style }} onClick={onClick}>
      {img1 && <Image src={img1} alt="" width={18} height={18} />}
      <span>{text}</span>
      {img2 && <Image src={img2} alt="" width={18} height={18} />}
    </button>
  );
}
