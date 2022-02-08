import { useMemo } from "react";

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
  const width = useMemo(() => {
    return props.rating != RatingEnum.VERY_HIGH
      ? `w-${props.rating}/5`
      : "w-full";
  }, [props.rating]);
  return (
    <div className={props.className}>
      <div className="font-bold pt-2">{props.label}</div>
      <div className="absolute bg-gray-100 rounded-lg h-4 w-full" />
      <div className={`absolute bg-purple-900 rounded-lg h-4 ${width}`} />
    </div>
  );
};

export default Skill;
