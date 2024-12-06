import styles from "@/styles/components/alarm.module.scss";
import Image from "next/image";
import Spinner from "./Spinner";
import Buttons from "./Buttons";
type Props = {
  text: string;
  buttonLabel?: string;
  isButton?: boolean;
  isLoading?: boolean;
  isComplete?: boolean;
};
export default function Snackbar({ text, buttonLabel, isButton, isComplete, isLoading }: Props) {
  return (
    <div className={`${styles.snackbar}`}>
      <div className={styles.description}>
        {isComplete && <Image src={`/icons/inputs/input_check_circle.svg`} alt="" width={20} height={20} />}
        {isLoading && <Spinner size="medium" />}
        <span>{text}</span>
      </div>
      {isButton && <Buttons color="default" size="xsmall" text={buttonLabel} />}
    </div>
  );
}
