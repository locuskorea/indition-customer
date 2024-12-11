import Buttons from "@/app/_components/Buttons";
import styles from "./auth_component.module.scss";
export default function RecodeEmail() {
  return (
    <div className={styles.re_code}>
      <span>혹시 이메일을 받지 못하셨나요?</span>
      <p>
        이메일 스팸함을 한번 확인해보세요😊
        <br />
        이메일 재발송이 필요하신 경우 아래 버튼을 눌러주세요!
      </p>
      <Buttons color="link" size="xsmall" text="이메일 재발송" onClick={null} style={{ width: 101 }} />
    </div>
  );
}
