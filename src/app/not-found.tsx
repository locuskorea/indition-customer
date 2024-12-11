import styles from "@/styles/layout.module.scss";
export default function NotFound() {
  return (
    <div className={styles.not_found}>
      <span>NOT FOUND PAGE</span>
      <p>페이지를 찾을 수 없습니다</p>
    </div>
  );
}
