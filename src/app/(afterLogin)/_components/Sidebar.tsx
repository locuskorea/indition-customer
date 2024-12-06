"use client";
import styles from "@/styles/layout.module.scss";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import SideNavigation from "./SideNavigation";
import Link from "next/link";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
type Props = {
  toggleSidebar: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  isExpanded: boolean;
};
export default function LayoutSidebar({ toggleSidebar, isExpanded }) {
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
        { label: "반품 처리 요청 내역", href: "/return/request?pageNo=1&pageCnt=20&status=&dateSearchType=&startDate=&endDate=&searchText=" },
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
  const [isSidebarTooltips, setIsSidebarTooltips] = useState(null);
  const onMouseoverTooltip = (type) => {
    setIsSidebarTooltips(type);
  };
  const onClickSidebar = (kind) => {};
  console.log(path);
  return (
    <div className={`${styles.sidebar_root} ${isExpanded ? styles.expand : styles.shrink}`}>
      <div className={styles.menu}>
        <span>MENU</span>
        {sidebar.map((el) => {
          if (el.child.length == 0) {
            return (
              <div className={`${styles.parent_menu}`} onMouseOver={() => onMouseoverTooltip(el.id)} key={`${el.id}`}>
                {isExpanded ? (
                  <Link href={el.href}>
                    <SideNavigation icon={el.icon} label={el.label} current={path.startsWith(el.href)} isSidebarTooltips={isSidebarTooltips == el.id} sidebarData={sidebar} mouseover={onMouseoverTooltip} isExpanded={isExpanded} />
                  </Link>
                ) : (
                  <SideNavigation icon={el.icon} label={el.label} current={path.startsWith(el.href)} isSidebarTooltips={isSidebarTooltips == el.id} sidebarData={sidebar} mouseover={onMouseoverTooltip} isExpanded={isExpanded} />
                )}
              </div>
            );
          } else {
            return (
              <div className={styles.parent_menu} onMouseOver={() => onMouseoverTooltip(el.label)}>
                <SideNavigation
                  icon={el.icon}
                  label={el.label}
                  current={!isExpanded ? path.startsWith(`/${el.id}`) : null}
                  isSidebarTooltips={isSidebarTooltips == el.label}
                  type="parent"
                  arrow={isExpanded}
                  onclick={() => onClickSidebar(el.id.toUpperCase())}
                  // isExpandMenu={state[`${el.id}Sidebar`]}
                  sidebarData={sidebar}
                  mouseover={onMouseoverTooltip}
                  isExpanded={isExpanded}
                />
                <>
                  {/* {isExpand && state[`${el.id}Sidebar`] && ( */}
                  <div className={`${styles.children_menu}  ${styles[el.id]}`}>
                    {el.child.map((d, idx) => (
                      <Link href={d.href} key={`d.label_${idx}`}>
                        <SideNavigation label={d.label} current={path.startsWith(d.href.split("?")[0])} type="child" mouseover={onMouseoverTooltip} isExpanded={isExpanded} />
                      </Link>
                    ))}
                  </div>
                  {/* // )} */}
                </>
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles.logout} ${!isExpanded && styles.shrink}`}>
        <button onClick={null}>
          <img src="/icons/logout.svg" alt="" loading="lazy" />
          {isExpanded && <p>로그아웃</p>}
        </button>
        <button onClick={toggleSidebar}>
          <Image src="/icons/circle_arrow_left_gray.svg" alt="" className={isExpanded ? styles.expand : styles.shrink} width={30} height={30} />
        </button>
      </div>
    </div>
  );
}
