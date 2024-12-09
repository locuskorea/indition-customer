"use client";
import { createContext, ReactNode, useState } from "react";
type Props = {
  children: ReactNode;
};
type SidebarState = {
  incomingSidebar: boolean;
  stockSidebar: boolean;
  outgoingSidebar: boolean;
  returnSidebar: boolean;
  accountSidebar: boolean;
  isExpand: boolean | null;
};
const AppContext = createContext(null);
export function ContextProvider({ children }: Props) {
  const [value, setValue] = useState(null);
  const [sidebarState, setSidebarState] = useState<SidebarState>({
    incomingSidebar: false,
    stockSidebar: false,
    outgoingSidebar: false,
    returnSidebar: false,
    accountSidebar: false,
    isExpand: JSON.parse(localStorage.getItem("isExpand")) ? JSON.parse(localStorage.getItem("isExpand")) : null,
  });
  return <AppContext.Provider value={{ sidebarState, setSidebarState }}>{children}</AppContext.Provider>;
}
export default AppContext;
