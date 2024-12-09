import styles from "@/styles/layout.module.scss";
import SidebarParentTooltips from "./SideBarParentTooltips";
import Tooltip from "@/app/_components/Tooltip";
import SidebarTooltip from "./SidebarTooltip";
import Image from "next/image";
type SidebarChild = {
  label: string;
  href: string;
};
type SidebarProps = {
  type: string;
  label: string;
  id: string;
  child: SidebarChild[] | [];
  icon: string;
  href?: string;
};
type Props = {
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
  sidebarData?: SidebarProps[];
  mouseover: (e: React.MouseEvent<HTMLDivElement> | string) => void;
  isExpand: boolean;
};
export default function SideNavigation({ icon, count, label, arrow, disabled, current, onclick, type, mouseover, isExpandMenu, isSidebarTooltips, sidebarData, isExpand }: Props) {
  return (
    <div className={`${styles.sidebar_elements} ${current ? styles.current : null} ${icon && !label && !arrow && !count ? styles.only_icon : null} ${type == "child" ? styles.child : null}`} onClick={onclick}>
      <div className={`${styles.left} ${!isExpand ? styles.shrink : styles.expand}`}>
        {icon && <Image src={icon} alt="" width={20} height={20} />}
        {label && <span className={styles.expand_label}>{label}</span>}
      </div>
      {!isExpand && !isExpandMenu && isSidebarTooltips && sidebarData.find((el) => el.label == label).child.length == 0 && <SidebarTooltip direction="left" label={label} sidebarData={sidebarData} isExpand={isExpand} />}
      {isExpandMenu != null && (
        <div className={`${styles.right} `}>
          {count && <span>{count}</span>}
          {arrow &&
            (disabled ? (
              <Image src={"/icons/arrow/arrow_down.svg"} alt="" width={20} height={20} />
            ) : (
              <Image src={"/icons/arrow/arrow_down.svg"} alt="" width={20} height={20} className={`${isExpandMenu ? styles.rotate : styles.arrow} ${!isExpand ? styles.shrink : styles.expand}`} />
            ))}
        </div>
      )}
      {type == "parent" && !isExpand && isSidebarTooltips && <SidebarParentTooltips label={label} sidebarData={sidebarData} mouseover={mouseover} />}
    </div>
  );
}
