import { ChangeEvent, useCallback, useEffect, useState } from "react";

const useInputs = (initialValue) => {
  const [valueObj, setValueObj] = useState(initialValue);
  const onChangeInputObj = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.startsWith(`\n`)) {
      return;
    }
    let phoneReg = /phone/gi;
    let mailReg = /mail/gi;
    const phoneFlag = phoneReg.test(name);
    const emailFlag = mailReg.test(name);
    if (phoneFlag) {
      let temp = value
        .replace(/[^0-9]/g, "")
        .replace(/(^02|^0505|[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3")
        .replace("--", "-");
      setValueObj((prev) => ({ ...prev, [name]: temp }));
    } else if (name == "businessRegistrationNumber") {
      let temp = value.replace(/[^0-9]/g, "").replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3");
      setValueObj((prev) => ({ ...prev, [name]: temp }));
    } else {
      setValueObj((prev) => ({ ...prev, [name]: value }));
    }
  }, []);
  const inputValueRebinding = useCallback(
    (name, value) => {
      setValueObj((prev) => ({ ...prev, [name]: value }));
    },
    [initialValue]
  );

  const resetInputValueObj = useCallback(
    (name) => {
      setValueObj({ ...valueObj, [name]: "" });
    },
    [initialValue]
  );
  return [valueObj, onChangeInputObj, resetInputValueObj, inputValueRebinding];
};
export default useInputs;
