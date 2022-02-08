import React from "react";

type CVSectionProps = {
  title: string;
  hr?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function CVSection(props: CVSectionProps) {
  return (
    <div className={props.className}>
      {props.hr && <hr />}
      <div className="md:text-2xl font-bold my-2">{props.title}</div>
      {props.children}
    </div>
  );
}
