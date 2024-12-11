import styles from "@/styles/inbound.module.scss";
import PageTitle from "../../_components/page/PageTitle";
import SearchAreaComponent from "../../_components/page/SearchArea";
import { useState } from "react";
export default function InboundListPage() {
  const tableData = ["입고 코드", "입고명", "수량", "상품화", "날짜", "담당자"];
  const selectConfig = {
    num: 1,
    type: "default",
    options: [
      { id: "", label: "전체" },
      { id: "applyAt", label: "신청일" },
      { id: "completeAt", label: "완료일" },
    ],
  };

  return (
    <div className={styles.inbound_apply_root}>
      <PageTitle title="입고 조회" />
      <SearchAreaComponent selectConfig={selectConfig} />
      <div className={styles.table_root}>
        <span>입고 조회 목록 N건</span>
        <div></div>
      </div>
    </div>
  );
}
