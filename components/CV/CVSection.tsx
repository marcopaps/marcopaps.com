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
      <div className="my-2 text-2xl font-bold">{props.title}</div>
      {props.children}
    </div>
  );
}
