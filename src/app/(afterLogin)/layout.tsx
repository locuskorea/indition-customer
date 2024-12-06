"use client";
import { ReactNode, useEffect, useState } from "react";
import styles from "@/styles/layout.module.scss";
import LayoutSidebar from "./_components/Sidebar";
import { GetServerSideProps } from "next";
import Header from "./_components/Header";
type Props = {
  children: ReactNode;
  modal: ReactNode;
  initialExpanded: ReactNode;
};

export default function AfterLoginLayout({ children, initialExpanded }: Props) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  useEffect(() => {
    const savedState = localStorage.getItem("sidebarExpanded");
    if (savedState !== null) {
      setIsExpanded(JSON.parse(savedState));
    }
  }, []);

  const toggleSidebar = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    localStorage.setItem("sidebarExpanded", JSON.stringify(newState));
  };
  return (
    <div className={styles.after_login_layout}>
      <Header isExpanded={isExpanded} />
      <div className={styles.body}>
        <LayoutSidebar toggleSidebar={toggleSidebar} isExpanded={isExpanded} />
        <div>{children}</div>
      </div>
    </div>
  );
}
