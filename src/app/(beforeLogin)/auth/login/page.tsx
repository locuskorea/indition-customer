"use client";

import Buttons from "@/app/_components/Buttons";
import PasswordInput from "@/app/_components/PasswordInput";
import TextInput from "@/app/_components/TextInput";
import regCheck from "@/app/_functions/reg";
import useInputs from "@/app/_hooks/useInputs";
import styles from "@/styles/auth.module.scss";
import Link from "next/link";
import LogoHeader from "../_component/LogoHeader";
import Description from "../_component/Description";

export default function LoginPage() {
  const [valueObj, onChangeValueObj, resetValueObj] = useInputs({ email: "", password: "" });
  const onClickLoginReqeust = () => {};

  return (
    <div className={styles.login_root}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <LogoHeader />
        <div className={styles.form_area}>
          <Description
            title={`스마트한 물류,
인디션과 오늘도 함께해요`}
            description={`로그인을 위해 이메일 주소와 비밀번호를 입력해 주세요`}
          />

          <div className={styles.input_area}>
            <TextInput
              size="medium"
              isError={!regCheck("email", valueObj.email)}
              appearance="standard"
              inputProps={{ value: valueObj, name: "email", onChange: onChangeValueObj, placeholder: "이메일 입력", onKeyUp: null }}
              resetFunc={resetValueObj}
              style={{ width: 375 }}
            />
            <PasswordInput size="medium" appearance="standard" inputProps={{ value: valueObj, name: "password", onChange: onChangeValueObj, placeholder: "비밀번호 입력" }} resetFunc={resetValueObj} style={{ width: 375 }} onKeyUp={null} />
          </div>
          <div className={styles.button_area}>
            <Buttons color="primary" size="large" text="로그인" style={{ width: 375 }} onClick={onClickLoginReqeust} />
            <div>
              <span>비밀번호가 기억나지 않으세요?</span>
              <Link href={`/auth/password`}>
                <Buttons size="xsmall" color="subtle" text="비밀번호 찾기" style={{ width: 100 }} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.join}>
          <span>
            인디션으로 물류사 검색의 <p>종착</p>을 경험해보세요
          </span>
          <Link href={`/auth/join`}>
            <Buttons size="large" color="default" text="계정 생성" style={{ width: 375 }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
