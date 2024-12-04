"use client";
import Buttons from "@/app/_components/Buttons";
import Checkbox from "@/app/_components/Checkbox";
import Loading from "@/app/_components/Loading";
import TextField from "@/app/_components/TextField";
import styles from "@/styles/auth.module.scss";
import { useState } from "react";
export default function LoginPage() {
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.login_root}>
      로그인 페이지
      <Checkbox size="large" text="" state="enable" properties={{ checked: isChecked, id: "id" }} onChange={onChangeCheckbox} />
    </div>
  );
}
