"use client";
import styles from "@/styles/auth.module.scss";
import LogoHeader from "../../_component/LogoHeader";
import Description from "../../_component/Description";
import { useSearchParams } from "next/navigation";
import EmailInfo from "../../_component/EmailInfo";
import PasswordInput from "@/app/_components/PasswordInput";
import useInputs from "@/app/_hooks/useInputs";
import Checkbox from "@/app/_components/Checkbox";
import Buttons from "@/app/_components/Buttons";
import { useEffect, useState } from "react";
import regCheck from "@/app/_functions/reg";
export default function PasswordReset() {
  const [valueObj, onChangeValueObj, resetValueObj] = useInputs({ password: "" });
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [agree, setAgree] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  useEffect(() => {
    setIsDisabled(!(agree && regCheck("password", valueObj.password)));
  }, [valueObj, agree]);
  return (
    <div className={styles.password_reset}>
      <div>
        <LogoHeader />
        <Description title={`비밀번호 재설정`} description={`새로운 비밀번호를 입력해주세요.`} />
        <div className={styles.section_wrapper}>
          <EmailInfo email={email} />
          <PasswordInput
            ValidationList
            label="비밀번호 재설정"
            size="medium"
            appearance="standard"
            inputProps={{ value: valueObj, name: "password", onChange: onChangeValueObj, placeholder: "비밀번호 입력" }}
            resetFunc={resetValueObj}
            style={{ width: 375 }}
            onKeyUp={null}
          />
          <Checkbox text="[필수] 개인정보 수집 및 이용 동의" state="enable" size="medium" properties={{ checked: agree, id: "agree" }} onChange={() => setAgree(!agree)} style={{ margin: "8px 0" }} />
          <Buttons text="비밀번호 재설정" size="large" color="primary" disabled={isDisabled} />
        </div>
      </div>
    </div>
  );
}
