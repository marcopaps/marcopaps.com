import type { ReactNode } from "react";

interface PageBodyProps {
  children?: ReactNode;
}

export default function PageBody(props: PageBodyProps) {
  return <div className="relative py-52">{props.children}</div>;
}
