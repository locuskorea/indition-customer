import styles from "./auth_component.module.scss";
type Props = {
  title: string;
  description: string;
};
export default function Description({ title, description }: Props) {
  return (
    <div className={styles.description}>
      <pre className={styles.title}>{title}</pre>
      <pre className={styles.des}>{description}</pre>
    </div>
  );
}
