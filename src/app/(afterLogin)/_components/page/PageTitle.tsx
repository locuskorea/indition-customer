import styles from "./page_component.module.scss";
type Props = {
  title: string;
};
export default function PageTitle({ title }: Props) {
  return (
    <div className={styles.page_title_component}>
      <span>{title}</span>
    </div>
  );
}
