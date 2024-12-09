import styles from "@/styles/layout.module.scss";
import { useRouter } from "next/navigation";
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
  href: string;
};
type Props = {
  label: string;
  direction: string;
  isExpanded: boolean;
  sidebarData: SidebarProps[];
};
export default function SidebarTooltip({ label, direction, sidebarData, isExpanded }: Props) {
  const router = useRouter();
  const onClickSidebar = () => {
    if (sidebarData) {
      router.push(sidebarData.find((el) => el.label == label).href);
    }
  };
  return (
    <div className={styles.tooltip_root} onClick={isExpanded ? null : onClickSidebar}>
      <div className={styles.wrap}>
        <button className={`${styles.tooltips} ${styles[direction]}`}>
          <span>{label}</span>
        </button>
      </div>
    </div>
  );
}
