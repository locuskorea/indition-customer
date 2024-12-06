import styles from "@/styles/layout.module.scss";
import SidebarParentTooltips from "./SideBarParentTooltips";
import Tooltip from "@/app/_components/Tooltip";
interface SideNavigationProps {
  icon?: string;
  count?: number;
  label?: string;
  arrow?: boolean;
  disabled?: boolean;
  current?: boolean;
  onclick?: () => void;
  type?: string;
  id?: string;
  isExpandMenu?: boolean;
  isSidebarTooltips?: boolean;
  sidebarData?: any[];
  mouseover: any;
  isExpanded: boolean;
}
export default function SideNavigation({ icon, count, label, arrow, disabled, current, onclick, type, isExpandMenu, isSidebarTooltips, sidebarData, mouseover, isExpanded }: SideNavigationProps) {
  return (
    <button className={`${styles.sidebar_elements} ${current ? styles.current : null} ${icon && !label && !arrow && !count ? styles.only_icon : null} ${type == "child" ? styles.child : null}`} onClick={onclick}>
      <div className={`${styles.left} ${!isExpanded ? styles.shrink : styles.expand}`}>
        {icon && <img src={icon} alt="" />}
        {label && <span className={styles.expand_label}>{label}</span>}
      </div>
      {!isExpanded && !isExpandMenu && isSidebarTooltips && sidebarData.find((el) => el.label == label).child.length == 0 && <Tooltip position="left" text={label} children />}
      {isExpandMenu != null && (
        <div className={`${styles.right} `}>
          {count && <span>{count}</span>}
          {arrow && (disabled ? <img src={"/icons/arrow_down_disabled.svg"} alt="" /> : <img src={"/icons/arrow_down_black.svg"} alt="" className={`${isExpandMenu ? styles.rotate : styles.arrow} ${!isExpanded ? styles.shrink : styles.expand}`} />)}
        </div>
      )}
      {type == "parent" && !isExpanded && isSidebarTooltips && <SidebarParentTooltips label={label} sidebarData={sidebarData} mouseover={mouseover} />}
    </button>
  );
}
