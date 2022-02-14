import { useCallback } from 'react';
import NextLink from 'next/link';
import type { Asset } from 'contentful';

interface IProps {
  title?: string;
  description?: string;
  to?: string;
  image?: Asset;
}

export default function Thubmnail(props: IProps) {
  const Base = useCallback(
    ({ children }) => {
      if (props.to) {
        return <NextLink href={props.to}>{children}</NextLink>;
      }

      return <div>{children}</div>;
    },
    [props.to]
  );

  const renderTitle = useCallback(() => {
    if (props.title) {
      return (
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </div>
      );
    }
  }, [props.title]);

  const renderDescription = useCallback(() => {
    if (props.description) {
      return (
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      );
    }
  }, [props.description]);

  const renderImage = useCallback(() => {
    if (props.image) {
      const imageUrl = props.image?.fields.file.url || '/vercel.svg';
      return <img className="rounded-t-lg " src={`https:${imageUrl}`} alt="" />;
    }
  }, [props.image]);

  return (
    <Base>
      <div className="relative m-auto h-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
        {renderImage()}
        <div className="p-5">
          {renderTitle()}
          {renderDescription()}
        </div>
      </div>
    </Base>
  );
}
