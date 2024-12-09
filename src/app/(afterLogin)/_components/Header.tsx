import styles from "@/styles/layout.module.scss";
import { useRouter } from "next/navigation";
type Props = {
  isExpand: boolean;
};
export default function Header({ isExpand }: Props) {
  const router = useRouter();
  return (
    <div className={styles.header_root}>
      <button className={`${styles.brand_info} ${!isExpand ? styles.shrink : styles.expand}`} onClick={() => router.push(`/dashboard`)}>
        ???
        {/* {isExpanded && <p>{userPermission?.brand ? userPermission?.brand : userInfo?.name}</p>} */}
      </button>
      <div className={styles.header}>
        <div className={styles.left}>{/* <SearchInput props={["small"]} width={"width_312"} inputProps={{ placeholder: "placeholder" }} /> */}</div>
        <div className={styles.right}>
          <button id="channel_talk">
            <img src="/icons/chat.svg" alt="" />
            <p>1:1 상담</p>
          </button>
          <button>
            <img src="/icons/guide.svg" alt="" />
            <p>사용가이드</p>
          </button>
        </div>
      </div>
    </div>
  );
}
