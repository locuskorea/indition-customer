import styles from "@/styles/components/loading.module.scss";
type Props = {
  size: string;
};
export default function Loading({ size }: Props) {
  return (
    <div className={`${styles.loading}`}>
      <div className={`${styles.spinner} ${styles[size]}`}></div>
    </div>
  );
}
