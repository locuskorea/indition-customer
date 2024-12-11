"use client";
import Buttons from "@/app/_components/Buttons";
import Checkbox from "@/app/_components/Checkbox";
import PasswordInput from "@/app/_components/PasswordInput";
import TextInput from "@/app/_components/TextInput";
import regCheck from "@/app/_functions/reg";
import useInputs from "@/app/_hooks/useInputs";
import styles from "@/styles/auth.module.scss";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import LogoHeader from "../_component/LogoHeader";
import Description from "../_component/Description";
import EmailInfo from "../_component/EmailInfo";
import Link from "next/link";
export default function JoinPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [valueObj, onChangeValueObj, resetValueObj, inputValueRebinding] = useInputs({ email: "", name: "", password: "" });
  const [agree, setAgree] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  useEffect(() => {
    if (!email) {
      setIsDisabled(!(agree && valueObj.email.length > 0 && regCheck("email", valueObj.email)));
    } else {
      setIsDisabled(!(agree && valueObj.name.length > 0 && regCheck("password", valueObj.password)));
    }
  }, [valueObj, email, agree]);
  useEffect(() => {
    if (email) {
      inputValueRebinding("email", email);
    }
  }, [email]);
  return (
    <div className={styles.join_root}>
      {!email && (
        <div>
          <LogoHeader />
          <Description title={`인디션을 시작해볼까요?`} description={`원활한 서비스 제공을 위해 아이디로 사용 할 이메일 인증이 필요해요!`} />
          <div className={styles.form_area}>
            <TextInput
              appearance={"standard"}
              size="medium"
              isHint
              isError={!regCheck("email", valueObj.email)}
              inputProps={{ value: valueObj, name: "email", onChange: onChangeValueObj, placeholder: "이메일 입력", onKeyUp: null }}
              resetFunc={resetValueObj}
              style={{ width: 375 }}
            />
            <Checkbox text="[필수] 개인정보 수집 및 이용 동의" state="enable" size="medium" properties={{ checked: agree, id: "agree" }} onChange={() => setAgree(!agree)} />
            <Buttons text="이메일 인증" size="large" color="primary" disabled={isDisabled} />
          </div>
          <div className={styles.move_login}>
            <p>이미 계정이 있으신가요?</p>
            <Link href={`/auth/login`}>
              <Buttons size="xsmall" color="subtle" text="로그인하기" style={{ width: 100 }} />
            </Link>
          </div>
        </div>
      )}
      {email && (
        <div>
          <LogoHeader />
          <div className={styles.description}>
            <span>계정을 생성을 완료해 볼까요?</span>
            <p>아이디와 비밀번호 설정을 마치면 회원가입이 완료돼요!</p>
          </div>
          <EmailInfo email={email} />
          <div className={styles.user_info_form}>
            <div>
              <p>이름</p>
              <TextInput appearance="standard" size="medium" inputProps={{ value: valueObj, name: "name", onChange: onChangeValueObj, placeholder: "본인 이름", onKeyUp: null }} resetFunc={resetValueObj} style={{ width: 375 }} />
            </div>
            <div>
              <PasswordInput
                ValidationList
                label="비밀번호"
                size="medium"
                appearance="standard"
                inputProps={{ value: valueObj, name: "password", onChange: onChangeValueObj, placeholder: "비밀번호 입력" }}
                resetFunc={resetValueObj}
                style={{ width: 375 }}
                onKeyUp={null}
              />
            </div>
            <Checkbox text="[필수] 개인정보 수집 및 이용 동의" state="enable" size="medium" properties={{ checked: agree, id: "agree" }} onChange={() => setAgree(!agree)} style={{ margin: "8px 0" }} />
            <Buttons text="계정 생성" size="large" color="primary" disabled={isDisabled} />
          </div>
        </div>
      )}
    </div>
  );
}
