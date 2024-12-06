import styles from "@/styles/components/buttons.module.scss";
import { useSearchParams } from "next/navigation";
type Props = {
  menu: string[];
};
export default function Tab({ menu }) {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  return (
    <div className={`${styles.tab}`}>
      {menu?.map((el) => (
        <button className={`${el == tab ? styles.current : null}`} key={`tab_${el}`}>
          <span>{el}</span>
        </button>
      ))}
    </div>
  );
}
