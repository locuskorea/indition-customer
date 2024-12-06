"use client";
import Buttons from "@/app/_components/Buttons";
import Checkbox from "@/app/_components/Checkbox";
import CustomSelect from "@/app/_components/CustomSelect";
import Loading from "@/app/_components/Spinner";
import RadioInput from "@/app/_components/RadioInput";
import Tag from "@/app/_components/Tag";
import TextInput from "@/app/_components/TextInput";
import TextField from "@/app/_components/TextField";
import useInputs from "@/app/_hooks/useInputs";
import styles from "@/styles/auth.module.scss";
import { useState } from "react";
import PasswordInput from "@/app/_components/PasswordInput";
import Tooltip from "@/app/_components/Tooltip";
import Snackbar from "@/app/_components/Snackbar";
import Tab from "@/app/_components/Tab";
import Filedrop from "@/app/_components/Filedrop";
import instance from "@/app/_functions/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import Flag from "@/app/_components/Flag";
const fetchData = async () => {
  const { data } = await instance.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};
export default function LoginPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["queryKey"],
    queryFn: fetchData,
  });
  const [valueObj, onChangeValueObj, resetValueObj] = useInputs({ id: "", name: "", email: "" });
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  console.log("data:", data, "isLoading:", isLoading, "error:", error);
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
    <div className={styles.login_root} style={{ display: "flex", flexDirection: "column", padding: 100 }}>
      로그인 페이지
      {/* <TextInput size="small" img1="/icons/photo.svg" img2="/icons/photo.svg" inputProps={{ value: valueObj, name: "name", placeholder: "HI", onChange: onChangeValueObj, onKeyUp: null }} appearance="standard" resetFunc={resetValueObj} />
      <TextInput size="small" img1="/icons/photo.svg" img2="/icons/photo.svg" inputProps={{ value: valueObj, name: "id", placeholder: "HI", onChange: onChangeValueObj, onKeyUp: null }} appearance="standard" resetFunc={resetValueObj} />
      <TextInput size="small" img1="/icons/photo.svg" img2="/icons/photo.svg" inputProps={{ value: valueObj, name: "email", placeholder: "HI", onChange: onChangeValueObj, onKeyUp: null }} appearance="standard" resetFunc={resetValueObj} /> */}
      {/* <Checkbox size="large" text="라벨" state="enable" properties={{ checked: isChecked, id: "id" }} onChange={onChangeCheckbox} /> */}
      {/* <RadioInput text="라벨" state="error" properties={{ checked: isChecked, id: "id", name: "radio" }} onChange={onChangeCheckbox} /> */}
      {/* <CustomSelect options={optionsData} selectStates={selectStates} setSelectStates={setSelectStates} /> */}
      {/* <SelectOptions optionsData={optionsData} optionsType="default" isOpen={true} setValue={setValue} value={value} /> */}
      {/* <Tag label={"태그"} img={""} isClose type="round" onClick={() => console.log("??")} /> */}
      {/* <TextField inputProps={{ value: valueObj, name: "email", onChange: onChangeValueObj }} resetFunc={resetValueObj} /> */}
      {/* <PasswordInput size="medium" img2={"/icons/photo.svg"} appreance={"error"} inputProps={{ value: valueObj, name: "password", onChange: onChangeValueObj, placeholder: "placeholder" }} resetFunc={resetValueObj} onKeyUp={null} /> */}
      {/* <Tooltip text="HELLO HELLO HELLO HELLO HELLO" position="right" arrow={true}>
        <span>HI</span>
      </Tooltip> */}
      <Buttons color="primary" img1={`/icons/photo.svg`} img2={`/icons/photo.svg`} size="large" text="button" />
      <Buttons color="primary" img1={`/icons/photo.svg`} size="large" text="button" />
      <Buttons color="primary" img2={`/icons/photo.svg`} size="large" text="button" />
      <Buttons color="primary" size="large" text="button" />
      <Snackbar text={"description"} buttonLabel={"button"} isButton isLoading />
      <Tab menu={["tab1", "tab2"]} />
      <Filedrop />
      <Flag img={`/icons/photo.svg`} title={"타이틀을 작성해주세요"} des={"이곳은 유저에게 추가 정보를 전달하기 위해 작성하는 설명란입니다"} type={"normal"} />
    </div>
  );
}
