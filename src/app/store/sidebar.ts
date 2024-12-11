import { create } from "zustand";

type Type = "inboundSidebar" | "stockSidebar" | "outgoingSidebar" | "returnSidebar" | "accountSidebar" | "isExpand";
type Sidebar = {
  inboundSidebar: boolean;
  stockSidebar: boolean;
  outgoingSidebar: boolean;
  returnSidebar: boolean;
  accountSidebar: boolean;
  isExpand: boolean | null;
};
type SidebarState = {
  sidebarState: Sidebar;
  setSidebarState: (type: Type) => void;
};
const useSidebarStore = create<SidebarState>((set) => ({
  sidebarState: {
    inboundSidebar: false,
    stockSidebar: false,
    outgoingSidebar: false,
    returnSidebar: false,
    accountSidebar: false,
    isExpand: localStorage.getItem("sidebarExpand") ? JSON.parse(localStorage.getItem("sidebarExpand")!) : null,
  },

  setSidebarState: (type: Type) => {
    set((state) => ({
      sidebarState: {
        ...state.sidebarState,
        [type]: !state.sidebarState[type],
      },
    }));
  },
}));

export default useSidebarStore;
