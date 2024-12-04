import { ReactNode } from "react";

export default function FormLayout(props: {
  children: ReactNode;
  label: string;
}) {
  const { children, label } = props;

  return (
    <div className="divide-y-2 divide-solid divide-grey-1">
      <div className="text-left text-grey font-extrabold mt-4 mb-1">
        {label}
      </div>
      <div className="grid grid-cols-2 gap-6 pt-4">{children}</div>
    </div>
  );
}
