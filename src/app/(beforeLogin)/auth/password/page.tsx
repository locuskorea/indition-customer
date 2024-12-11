"use client";
import styles from "@/styles/auth.module.scss";
import LogoHeader from "../_component/LogoHeader";
import Description from "../_component/Description";
import { useSearchParams } from "next/navigation";
import useInputs from "@/app/_hooks/useInputs";
import PasswordInput from "@/app/_components/PasswordInput";
import Buttons from "@/app/_components/Buttons";
import TextInput from "@/app/_components/TextInput";
import regCheck from "@/app/_functions/reg";
export default function PasswordPage() {
  const [valueObj, onChangeValueObj, resetValueObj] = useInputs({ email: "" });
  const onClickPasswordResetLinkReqeust = () => {};
  return (
    <div className={styles.password_root}>
      <div>
        <LogoHeader />
        <Description
          title="비밀번호를 잊으셨나요?"
          description={`비밀번호를 재설정 할 수 있는 링크를 이메일로 보내드려요!
인디션에 사용중인 계정을 입력해주세요!`}
        />
        <TextInput
          appearance={"standard"}
          size="medium"
          isHint
          isError={!regCheck("email", valueObj.email)}
          inputProps={{ value: valueObj, name: "email", onChange: onChangeValueObj, placeholder: "이메일 입력", onKeyUp: null }}
          resetFunc={resetValueObj}
          style={{ width: 375 }}
          apiError
        />
        <Buttons color="primary" size="large" onClick={!regCheck("email", valueObj.email) ? null : onClickPasswordResetLinkReqeust} text="재설정 링크 보내기" disabled={valueObj.email.length == 0} />
      </div>
    </div>
  );
}
