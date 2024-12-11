"use client";
import Buttons from "@/app/_components/Buttons";
import styles from "@/styles/auth.module.scss";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import LogoHeader from "../../_component/LogoHeader";
import Description from "../../_component/Description";
import RecodeEmail from "../../_component/RecodeEmail";
export default function JoinCertificationPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  console.log(params, searchParams);
  const [code, setCode] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]*$/.test(value)) return; // 숫자만 허용
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // 다음 칸으로 이동
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus(); // 이전 칸으로 이동
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").slice(0, 6); // 최대 6자리
    const newCode = [...code];
    pasteData.split("").forEach((char, i) => {
      if (i < 6) newCode[i] = /^[0-9]$/.test(char) ? char : "";
    });
    setCode(newCode);

    // 마지막 칸으로 포커스 이동
    inputsRef.current[Math.min(pasteData.length, 6) - 1]?.focus();
  };
  return (
    <div className={styles.certification_root}>
      <div>
        <LogoHeader />
        <Image src={`/icons/image/email.png`} alt="" width={100} height={100} />
        <Description
          title={`${email}`}
          description={`위 이메일로 이메일 인증을 위한 코드가 발송되었습니다.
코드를 입력해주세요`}
        />
        <div
          className={styles.certification_form}
          onPaste={handlePaste} // Paste 이벤트 처리
        >
          {code.map((digit, index) => (
            <input key={index} type="text" maxLength={1} className={styles.digit} value={digit} onChange={(e) => handleInputChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} ref={(el) => (inputsRef.current[index] = el)} />
          ))}
        </div>
        <RecodeEmail />
      </div>
    </div>
  );
}
