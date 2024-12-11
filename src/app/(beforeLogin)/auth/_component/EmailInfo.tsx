import styles from "./auth_component.module.scss";
type Props = {
  email: string;
};
export default function EmailInfo({ email }: Props) {
  return (
    <div className={styles.email_info}>
      <span>이메일(아이디)</span>
      <p>{email}</p>
    </div>
  );
}
