"use client";
import styles from "@/styles/layout.module.scss";
import Image from "next/image";
import { SetStateAction, useContext, useEffect, useLayoutEffect, useState } from "react";
import SideNavigation from "./SideNavigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppContext from "@/app/ContextProvider";
type Props = {
  toggleSidebar: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  isSidebarTooltips?: string;
  setIsSidebarTooltips?: React.Dispatch<SetStateAction<string>>;
  onMouseoverTooltip: (e: React.MouseEvent<HTMLDivElement> | string) => void;
};
export default function LayoutSidebar({ toggleSidebar, isSidebarTooltips, setIsSidebarTooltips, onMouseoverTooltip }: Props) {
  const { sidebarState, setSidebarState } = useContext(AppContext);
  const path = usePathname();
  const sidebar = [
    {
      type: "parent",
      label: "상품 대시보드",
      id: "dashboard",
      child: [],
      href: "/dashboard",
      icon: "/icons/navi_home.svg",
    },
    {
      type: "parent",
      label: "입고 관리",
      id: "incoming",
      icon: "/icons/sidebar_incoming.svg",
      child: [
        { label: "입고 신청", href: "/incoming/apply?status=&dateSearchType=&startDate=&endDate=&searchText=" },
        { label: "입고 조회", href: "/incoming/list?pageNo=1&pageCnt=20&dateSearchType=&startDate=&endDate=" },
      ],
    },
    {
      type: "parent",
      label: "재고 조회",
      id: "stock",
      icon: "/icons/sidebar_stock.svg",
      child: [
        // { label: "지시서 관리", href: "/stock/instructions" },
        { label: "상품 조회", href: "/stock/products?pageNo=1&pageCnt=20&exist=&searchText=" },
      ],
    },
    {
      type: "parent",
      label: "출고 관리",
      id: "outgoing",
      icon: "/icons/sidebar_outgoing.svg",
      child: [
        { label: "출고 신청", href: "/outgoing/apply?type=&status=&dateSearchType=&startDate=&endDate=&searchText=" },
        { label: "출고 조회", href: "/outgoing/list?pageNo=1&pageCnt=20&type=" },
      ],
    },
    {
      type: "parent",
      label: "반품 관리",
      id: "return",
      icon: "/icons/sidebar_return.svg",
      child: [
        { label: "반품 신청", href: "/return/apply?pageNo=1&pageCnt=20&status=&dateSearchType=&startDate=&endDate=&searchText=" },
        { label: "반품 처리 요청 내역", href: "/return/process?pageNo=1&pageCnt=20&status=&dateSearchType=&startDate=&endDate=&searchText=" },
        { label: "반품 조회", href: "/return/list?pageNo=1&pageCnt=20&status=&dateSearchType=&startDate=&endDate=&searchText=" },
      ],
    },
    {
      type: "parent",
      label: "정산 관리",
      id: "account",
      icon: "/icons/sidebar_account.svg",
      child: [
        { label: "요금표", href: "/account/fee" },
        { label: "일별 업무 정산", href: `/account/list/day?date=` },
        { label: "월별 정산", href: `/account/list/month?pageNo=1&pageCnt=20&date=` },
      ],
    },
    {
      type: "parent",
      label: "브랜드 설정",
      id: "setting",
      icon: "/icons/sidebar_setting.svg",
      child: [],
      href: `/store/setting?type=브랜드정보&brand=`,
    },
  ];
  console.log(sidebarState, "sidebarState");
  const onClickSidebar = (kind) => {
    if (sidebarState.isExpand) {
      switch (kind) {
        case "INCOMING": {
          if (sidebarState.incomingSidebar) {
            setSidebarState({ ...sidebarState, incomingSidebar: false });
          } else {
            setSidebarState({ ...sidebarState, incomingSidebar: true });
          }
          break;
        }
        case "STOCK": {
          if (sidebarState.stockSidebar) {
            setSidebarState({ ...sidebarState, stockSidebar: false });
          } else {
            setSidebarState({ ...sidebarState, stockSidebar: true });
          }
          break;
        }
        case "OUTGOING": {
          if (sidebarState.outgoingSidebar) {
            setSidebarState({ ...sidebarState, outgoingSidebar: false });
          } else {
            setSidebarState({ ...sidebarState, outgoingSidebar: true });
          }
          break;
        }
        case "RETURN": {
          if (sidebarState.returnSidebar) {
            setSidebarState({ ...sidebarState, returnSidebar: false });
          } else {
            setSidebarState({ ...sidebarState, returnSidebar: true });
          }
          break;
        }
        case "ACCOUNT": {
          if (sidebarState.accountSidebar) {
            setSidebarState({ ...sidebarState, accountSidebar: false });
          } else {
            setSidebarState({ ...sidebarState, accountSidebar: true });
          }
          break;
        }
        default: {
          break;
        }
      }
    }
  };

  return (
    <div className={`${styles.sidebar_root} ${sidebarState.isExpand ? styles.expand : styles.shrink}`}>
      <div className={styles.menu}>
        <span>MENU</span>
        {sidebar.map((el) => {
          if (el.child.length == 0) {
            return (
              <div className={`${styles.parent_menu}`} onMouseOver={() => onMouseoverTooltip(el.id)} key={`${el.id}`}>
                {sidebarState.isExpand ? (
                  <Link href={el.href}>
                    <SideNavigation icon={el.icon} label={el.label} current={path.startsWith(el.href)} isSidebarTooltips={isSidebarTooltips == el.id} sidebarData={sidebar} mouseover={onMouseoverTooltip} isExpand={sidebarState.isExpand} />
                  </Link>
                ) : (
                  <SideNavigation icon={el.icon} label={el.label} current={path.startsWith(el.href)} isSidebarTooltips={isSidebarTooltips == el.id} sidebarData={sidebar} mouseover={onMouseoverTooltip} isExpand={sidebarState.isExpand} />
                )}
              </div>
            );
          } else {
            return (
              <div className={styles.parent_menu} onMouseOver={() => onMouseoverTooltip(el.label)} key={`${el.id}`} id={el.id}>
                <SideNavigation
                  icon={el.icon}
                  label={el.label}
                  current={!sidebarState.isExpand ? path.startsWith(`/${el.id}`) : null}
                  isSidebarTooltips={isSidebarTooltips == el.label}
                  type="parent"
                  arrow={sidebarState.isExpand}
                  onclick={() => onClickSidebar(el.id.toUpperCase())}
                  isExpandMenu={sidebarState[`${el.id}Sidebar`]}
                  sidebarData={sidebar}
                  // mouseover={onMouseoverTooltip}
                  isExpand={sidebarState.isExpand}
                />
                <>
                  {sidebarState.isExpand && sidebarState[`${el.id}Sidebar`] && (
                    <div className={`${styles.children_menu} ${sidebarState.isExpand && sidebarState[`${el.id}Sidebar`] ? styles.show : styles.hide} ${styles[el.id]}`}>
                      {el.child.map((d, idx) => (
                        <Link href={d.href} key={`d.label_${idx}`}>
                          <SideNavigation label={d.label} current={path.startsWith(d.href.split("?")[0])} type="child" mouseover={onMouseoverTooltip} isExpand={sidebarState.isExpand} />
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles.logout} ${!sidebarState.isExpand && styles.shrink}`}>
        <button onClick={null}>
          <img src="/icons/logout.svg" alt="" loading="lazy" />
          {sidebarState.isExpand && <p>로그아웃</p>}
        </button>
        <button onClick={toggleSidebar}>
          <Image src="/icons/circle_arrow_left_gray.svg" alt="" className={sidebarState.isExpand ? styles.expand : styles.shrink} width={30} height={30} />
        </button>
      </div>
    </div>
  );
}
