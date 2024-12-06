import styles from "@/styles/components/loading.module.scss";
type Props = {
  size: string;
};
export default function Spinner({ size }: Props) {
  return <div className={`${styles.spinner} ${styles[size]}`}></div>;
}
