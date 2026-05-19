import type { ReactNode } from "react";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
  children: ReactNode;
};

export function PostBody({ children }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>{children}</div>
    </div>
  );
}
