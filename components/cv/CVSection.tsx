interface CVSectionProps {
  title: string;
  hr?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const CVSection = (props: CVSectionProps) => {
  return (
    <div className={props.className}>
      {props.hr && <hr />}
      <div className="my-2 text-2xl font-bold">{props.title}</div>
      {props.children}
    </div>
  );
};

export default CVSection;
