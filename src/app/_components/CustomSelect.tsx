"use client";
import styles from "@/styles/components/select.module.scss";
import { MouseEventHandler, SetStateAction, useCallback, useEffect, useRef } from "react";
import Checkbox from "./Checkbox";
import RadioInput from "./RadioInput";
import Image from "next/image";
type Data = {
  id: number | string;
  label: string;
};
type SelectState = {
  isOpen: boolean;
  selectedOption: string | number;
  type: string;
};
type SelectStates = {
  [key: string]: SelectState;
};
type Props = {
  options: Data[];
  selectStates: SelectStates;
  setSelectStates: React.Dispatch<SetStateAction<SelectStates>>;
};
export default function CustomSelect({ options, selectStates, setSelectStates }: Props) {
  const selectRefs = useRef([]);
  const toggleDropdown = (selectId) => {
    setSelectStates((prev) => ({
      ...prev,
      [selectId]: { ...prev[selectId], isOpen: !prev[selectId].isOpen },
    }));
  };

  const handleOptionSelect = (selectId, option) => {
    setSelectStates((prev) => ({
      ...prev,
      [selectId]: { ...prev[selectId], isOpen: false, selectedOption: option },
    }));
  };
  // const closeDropdown = (id) => {
  //   setSelectStates((prev) => ({
  //     ...prev,
  //     [id]: { ...prev[id], isOpen: false },
  //   }));
  // };
  useEffect(() => {
    const handleClickOutside = (event) => {
      selectRefs.current.forEach((ref, index) => {
        if (ref && !ref.contains(event.target)) {
          const id = `select${index + 1}`;
          setSelectStates((prev) => ({
            ...prev,
            [id]: { ...prev[id], isOpen: false },
          }));
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      {Object.keys(selectStates).map((id, idx) => (
        <div className={`${styles.custom_select} ${selectStates[id]?.selectedOption && styles.selected}`} ref={(el) => (selectRefs.current[idx] = el)} key={id}>
          <div className={`${styles.label}  `} onClick={() => toggleDropdown(id)}>
            <span>{options.find((el) => el.id == selectStates[id].selectedOption)?.label}</span>
            <div className={`${selectStates[id]?.isOpen && styles.open}`}>
              {selectStates[id]?.selectedOption && <Image src={`/icons/inputs/input_check_circle.svg`} alt="" width={16} height={16} />}
              <Image className={styles.arrow} src={`/icons/arrow/arrow_down.svg`} alt="" width={24} height={24} />
            </div>
          </div>

          {selectStates[id]?.isOpen && (
            <div className={styles.options}>
              {options?.map((el, idx) => (
                <>
                  {selectStates[id]?.type == "default" && (
                    <div className={`${styles.rows} ${selectStates[id]?.selectedOption == el.id ? styles.selected : null}`} key={`options_${idx}`} onClick={() => handleOptionSelect(id, el.id)}>
                      <span>{el.label}</span>
                    </div>
                  )}
                  {selectStates[id]?.type == "checkbox" && (
                    <div className={`${styles.rows} ${selectStates[id]?.selectedOption == el.id ? styles.selected : null}`} key={`options_${idx}`} onClick={() => handleOptionSelect(id, el.id)}>
                      {/* <span>{el.label}</span> */}
                      <Checkbox text={el.label} size="medium" state="enable" properties={{ id: el.id.toString(), checked: selectStates[id]?.selectedOption == el.id }} onChange={() => handleOptionSelect(id, el.id)} />
                    </div>
                  )}
                  {selectStates[id]?.type == "radio" && (
                    <div className={`${styles.rows} ${selectStates[id]?.selectedOption == el.id ? styles.selected : null}`} key={`options_${idx}`} onClick={() => handleOptionSelect(id, el.id)}>
                      <RadioInput text={el.label} state="enable" properties={{ id: el.id.toString(), name: el.id.toString(), checked: selectStates[id]?.selectedOption == el.id }} onChange={() => handleOptionSelect(id, el.id)} />
                    </div>
                  )}
                </>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
