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
            .child.map((d) => (
              <Link href={d.href}>
                <a>
                  <span>{d.label}</span>
                </a>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default SidebarParentTooltips;
