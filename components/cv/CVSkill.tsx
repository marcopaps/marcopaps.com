import { useMemo } from 'react';

export enum RatingEnum {
  'No experience at all',
  'Beginner',
  'Junior',
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
  /* 'w-1/5', 'w-2/5', 'w-3/5', 'w-4/5' */
  const width = useMemo(() => {
    return props.rating != RatingEnum.Expert ? `w-${props.rating}/5` : 'w-full';
  }, [props.rating]);

  const ratingTextColor = useMemo(() => {
    return props.rating < 3 ? 'text-purple-900' : 'text-gray-100';
  }, [props.rating]);
  return (
    <div className={props.className}>
      <div className="pt-2 font-bold">{props.label}</div>
      <div className="absolute h-5 w-full rounded-lg bg-gray-100">
        <div
          className={`absolute z-10 flex h-5 w-full items-center justify-center rounded-lg text-center text-xs ${ratingTextColor}`}
        >
          {RatingEnum[props.rating]}
        </div>
      </div>
      <div className={`absolute h-5 rounded-lg bg-purple-900 ${width}`} />
    </div>
  );
};

export default Skill;
