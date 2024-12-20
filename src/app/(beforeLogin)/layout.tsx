import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};
export default function BeforeLoginLayout({ children }: Props) {
  return <div>{children}</div>;
}
