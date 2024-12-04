import styles from "@/styles/components/buttons.module.scss";
import Image from "next/image";
type Props = {
  img?: string;
  label: string;
  isClose?: boolean;
  type: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export default function Tag({ img, label, isClose, type, onClick }: Props) {
  return (
    <button className={`${styles.tag} ${styles[type]}`} onClick={onClick}>
      {img && <Image src={img} alt="" width={16} height={16} />}
      <span>{label}</span>
      {isClose && <Image src={`/icons/x.svg`} alt="" width={16} height={16} />}
    </button>
  );
}
