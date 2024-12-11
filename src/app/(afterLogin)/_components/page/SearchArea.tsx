"use client";
import TextInput from "@/app/_components/TextInput";
import styles from "./page_component.module.scss";
import { useState } from "react";
import SearchInput from "@/app/_components/SearchInput";
import CustomSelect from "@/app/_components/CustomSelect";
export default function SearchAreaComponent({ selectConfig }) {
  const initializeSelectStates = () => {
    const initialState = {};
    for (let i = 1; i <= selectConfig.num; i++) {
      initialState[`select${i}`] = {
        isOpen: false,
        selectedOption: "",
        type: selectConfig.type,
      };
    }
    return initialState;
  };
  const [searchText, setSearchText] = useState("");
  const [selectStates, setSelectStates] = useState(initializeSelectStates);
  const onKeyupSearchReqeust = (e) => {
    if (e.key == "Enter") {
      alert("search");
    }
  };
  return (
    <div className={styles.search_area_component}>
      <div className={styles.left}>
        <CustomSelect options={selectConfig.options} selectStates={selectStates} setSelectStates={setSelectStates} />
      </div>
      <div className={styles.right}>
        <SearchInput
          appearance="standard"
          size="small"
          inputProps={{ value: searchText, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value), placeholder: "검색", onKeyUp: onKeyupSearchReqeust }}
          resetFunc={() => setSearchText("")}
        />
      </div>
    </div>
  );
}
