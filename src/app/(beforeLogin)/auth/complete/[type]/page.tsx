"use client";
import styles from "@/styles/auth.module.scss";
import LogoHeader from "../../_component/LogoHeader";
import Image from "next/image";
import Description from "../../_component/Description";
import Buttons from "@/app/_components/Buttons";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import RecodeEmail from "../../_component/RecodeEmail";
export default function PasswordCompletePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const name = searchParams.get("name");
  const { type } = params;
  console.log(params);
  return (
    <div className={styles.password_complete_root}>
      {type == "join" && (
        <div>
          <LogoHeader />
          <Image src={`/icons/image/smile.png`} alt="" width={80} height={80} />
          <Description
            title={`${name}님, 만나서 반가워요!`}
            description={`계정 생성이 모두 완료되었어요!
인디션과 함께 물류 관리를 시작해 볼까요?`}
          />
          <Link href={`/dashboard`}>
            <Buttons color="primary" size="medium" text="시작하기" style={{ width: 375 }} />
          </Link>
        </div>
      )}
      {type == "reset" && (
        <div>
          <LogoHeader />
          <Image src={`/icons/image/mark.png`} alt="" width={80} height={80} />
          <Description
            title="비밀번호 재설정 완료"
            description={`비밀번호가 재설정 되었습니다.
아래 버튼을 클릭하여 로그인하세요!`}
          />
          <Link href={`/auth/login`}>
            <Buttons text="로그인하기" img2="/icons/arrow/arrow_front.svg" size="medium" color="default" style={{ width: 375 }} />
          </Link>
        </div>
      )}
      {type == "link" && (
        <div>
          <LogoHeader />
          <Image src={`/icons/image/mark.png`} alt="" width={80} height={80} />
          <Description
            title="재설정 메일을 발송했습니다"
            description={`${email}로 계정 전송을 완료 했습니다.
메일에서 비밀번호 재설정을 완료해주세요.`}
          />
          <RecodeEmail />
        </div>
      )}
    </div>
  );
}
