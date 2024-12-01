import styles from "@/styles/auth.module.scss";
export default function LoginPage() {
  return (
    <div className={styles.login_root}>
      로그인 페이지
      <button>회원가입</button>
    </div>
  );
}
