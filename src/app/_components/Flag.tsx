"use client";
import styles from "@/styles/components/alarm.module.scss";
import Image from "next/image";
import { useState } from "react";
import Buttons from "./Buttons";
export default function Flag({ img, title, des, type }) {
  const [isExpand, setIsExpand] = useState(type == "normal" ? true : false);
  return (
    <div className={`${styles.flag_root} ${styles[type]} ${isExpand ? styles.expand : styles.shrink}`}>
      <button className={styles.title} onClick={() => setIsExpand(type == "normal" ? true : !isExpand)}>
        <div>
          {img && type == "normal" && <Image src={img} alt="" width={24} height={24} />}
          {type == "success" && <Image src={`/icons/flag/success_white.svg`} alt="" width={24} height={24} />}
          {type == "error" && <Image src={`/icons/flag/error_white.svg`} alt="" width={24} height={24} />}
          {type == "warning" && <Image src={`/icons/flag/warning_black.svg`} alt="" width={24} height={24} />}
          {type == "info" && <Image src={`icons/flag/info_white.svg`} alt="" width={24} height={24} />}
          <span>{title}</span>
        </div>
        <Image src={type == "normal" ? `/icons/x.svg` : `/icons/arrow/arrow_white.svg`} alt="" width={24} height={24} />
      </button>
      <div className={styles.des}>
        <span>{des}</span>
        <div>
          <Buttons color={type == "normal" ? "link" : "default"} size="xsmall" text="다음에할게요" style={{ color: type == "warning" || type == "normal" ? null : "white" }} />
          <Buttons color={type == "normal" ? "link" : "default"} size="xsmall" text="이해했습니다" style={{ color: type == "warning" || type == "normal" ? null : "white" }} />
        </div>
      </div>
    </div>
  );
}
