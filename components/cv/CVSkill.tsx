import { useMemo } from 'react';

export enum RatingEnum {
  '',
  'Beginner',
  'Average',
  'Experienced',
  'Expert',
}

interface IProps {
  label: string;
  rating: RatingEnum;
  className?: string;
}

const Skill = (props: IProps) => {
  /* 'w-1/4', 'w-2/4', 'w-3/4', 'w-4/4' */
  const width = useMemo(() => {
    return props.rating != RatingEnum.Expert ? `w-${props.rating}/4` : 'w-full';
  }, [props.rating]);

  return (
    <div className={props.className}>
      <div className="pt-2 font-bold">{props.label}</div>
      <div className="absolute h-5 w-full rounded-lg bg-gray-100">
        <div className={`absolute z-10 h-5 w-full rounded-lg`}></div>
      </div>
      <div
        className={`absolute flex h-5 items-center justify-center rounded-lg bg-purple-900 text-center text-xs text-gray-100 ${width}`}
      >
        {RatingEnum[props.rating]}
      </div>
    </div>
  );
};

export default Skill;
