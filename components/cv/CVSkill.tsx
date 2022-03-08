import { useMemo } from 'react';

export enum RatingEnum {
  NONE,
  VERY_LOW,
  LOW,
  AVERAGE,
  HIGH,
  VERY_HIGH,
}

interface IProps {
  label: string;
  rating: RatingEnum;
  className?: string;
}

const Skill = (props: IProps) => {
  /* 'w-1/5', 'w-2/5', 'w-3/5', 'w-4/5' */
  const width = useMemo(() => {
    return props.rating != RatingEnum.VERY_HIGH
      ? `w-${props.rating}/5`
      : 'w-full';
  }, [props.rating]);
  return (
    <div className={props.className}>
      <div className="pt-2 font-bold">{props.label}</div>
      <div className="absolute h-4 w-full rounded-lg bg-gray-100" />
      <div className={`absolute h-4 rounded-lg bg-purple-900 ${width}`} />
    </div>
  );
};

export default Skill;
