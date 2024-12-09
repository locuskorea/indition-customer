import Link from "next/link";
import styles from "@/styles/layout.module.scss";

const SidebarParentTooltips = ({ label, sidebarData, mouseover }) => {
  return (
    <div className={styles.sidebar_parent_tooltip}>
      <div>
        <div>{label}</div>

        <div>
          {sidebarData
            .filter((el) => el.child.length > 0)
            .find((el) => el.label == label)
            .child.map((d, idx) => (
              <Link href={d.href} key={`parent_tooltip_${idx}`}>
                <span>{d.label}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default SidebarParentTooltips;
