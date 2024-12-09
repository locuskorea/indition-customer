"use client";
import { ReactNode, useContext, useEffect, useState } from "react";
import styles from "@/styles/layout.module.scss";
import LayoutSidebar from "./_components/Sidebar";
import { GetServerSideProps } from "next";
import Header from "./_components/Header";
import AppContext from "../ContextProvider";
type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
  const { sidebarState, setSidebarState } = useContext(AppContext);

  useEffect(() => {
    const savedState = localStorage.getItem("sidebarExpand");
    if (savedState !== null) {
      console.log(sidebarState.isExpand, "sidebarState", localStorage.getItem("sidebarExpand"));
      setSidebarState({ ...sidebarState, isExpand: JSON.parse(savedState) });
    }
  }, []);

  const toggleSidebar = () => {
    const newState = !sidebarState.isExpand;
    setSidebarState({ ...sidebarState, isExpand: newState });
    localStorage.setItem("sidebarExpand", JSON.stringify(newState));
  };
  const [isSidebarTooltips, setIsSidebarTooltips] = useState(null);
  const onMouseoverTooltip = (type) => {
    setIsSidebarTooltips(type);
  };
  return (
    <div className={styles.after_login_layout}>
      <Header isExpand={sidebarState.isExpand} />
      <div className={styles.body}>
        <LayoutSidebar toggleSidebar={toggleSidebar} isSidebarTooltips={isSidebarTooltips} setIsSidebarTooltips={setIsSidebarTooltips} onMouseoverTooltip={onMouseoverTooltip} />
        <div onMouseOver={() => onMouseoverTooltip(null)} className={styles.children_root}>
          {children}
        </div>
      </div>
    </div>
  );
}
