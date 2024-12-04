"use client";
import Buttons from "@/app/_components/Buttons";
import Checkbox from "@/app/_components/Checkbox";
import CustomSelect from "@/app/_components/CustomSelect";
import Loading from "@/app/_components/Loading";
import RadioInput from "@/app/_components/RadioInput";
import Tag from "@/app/_components/Tag";
import TextInput from "@/app/_components/TextInput";
import TextField from "@/app/_components/TextField";
import useInputs from "@/app/_hooks/useInputs";
import styles from "@/styles/auth.module.scss";
import { useState } from "react";
export default function LoginPage() {
  const [valueObj, onChangeValueObj, resetValueObj] = useInputs({ id: "", name: "", email: "" });
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectStates, setSelectStates] = useState({
    select1: { isOpen: false, selectedOption: "", type: "radio" },
    select2: { isOpen: false, selectedOption: "", type: "checkbox" },
    select3: { isOpen: false, selectedOption: "", type: "default" },
  });
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const optionsData = [
    { label: "라벨1", id: 1 },
    { label: "라벨2", id: 2 },
  ];

  console.log(selectStates);

  return (
    <div className={styles.login_root} style={{ display: "flex", flexDirection: "row" }}>
      로그인 페이지
      {/* <TextInput size="small" img1="/icons/photo.svg" img2="/icons/photo.svg" inputProps={{ value: valueObj, name: "name", placeholder: "HI", onChange: onChangeValueObj, onKeyUp: null }} appearance="standard" resetFunc={resetValueObj} />
      <TextInput size="small" img1="/icons/photo.svg" img2="/icons/photo.svg" inputProps={{ value: valueObj, name: "id", placeholder: "HI", onChange: onChangeValueObj, onKeyUp: null }} appearance="standard" resetFunc={resetValueObj} />
      <TextInput size="small" img1="/icons/photo.svg" img2="/icons/photo.svg" inputProps={{ value: valueObj, name: "email", placeholder: "HI", onChange: onChangeValueObj, onKeyUp: null }} appearance="standard" resetFunc={resetValueObj} /> */}
      {/* <Checkbox size="large" text="라벨" state="enable" properties={{ checked: isChecked, id: "id" }} onChange={onChangeCheckbox} /> */}
      {/* <RadioInput text="라벨" state="error" properties={{ checked: isChecked, id: "id", name: "radio" }} onChange={onChangeCheckbox} /> */}
      {/* <CustomSelect options={optionsData} selectStates={selectStates} setSelectStates={setSelectStates} /> */}
      {/* <SelectOptions optionsData={optionsData} optionsType="default" isOpen={true} setValue={setValue} value={value} /> */}
      {/* <Tag label={"태그"} img={""} isClose type="round" onClick={() => console.log("??")} /> */}
      <TextField />
    </div>
  );
}
