import type { ReactNode } from "react";

function MyCard({
  title,
  children,
  footer,
}: {
  title: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
      ----
      {footer}
    </div>
  );
}

export default MyCard;
