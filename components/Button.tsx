import { useMemo } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const DefaultButton = (props: ButtonProps) => {
  const className = useMemo(() => {
    return [
      "text-white",
      "bg-blue-700",
      "hover:bg-blue-800",
      "focus:ring-4",
      "focus:ring-blue-300",
      "font-medium",
      "rounded-lg",
      "text-sm",
      "px-5",
      "py-2.5",
      "text-center",
      "dark:bg-blue-600",
      "dark:hover:bg-blue-700",
      "dark:focus:ring-blue-800",
    ].join(" ");
  }, []);

  return (
    <button onClick={props.onClick} type="button" className={className}>
      {props.label}
    </button>
  );
};
