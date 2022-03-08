interface CVSectionProps {
  title: string;
  hr?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function CVSection(props: CVSectionProps) {
  const className = `py-8 ${props.className ?? ''}`.trim();
  const borderStyle = props.hr && 'border-t-2 pt-4';

  return (
    <div className={className}>
      <div className={`${borderStyle} pb-4 text-2xl font-bold`}>
        <span>{props.title}</span>
      </div>
      {props.children}
    </div>
  );
}
