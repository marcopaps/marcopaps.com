import React, { useCallback } from 'react';
import Link from 'next/link';
import type { Asset } from 'contentful';

interface IProps {
  title?: string;
  description?: string;
  to?: string;
  image?: Asset;
  children?: React.ReactNode;
}

export default function Thumbnail(props: IProps) {
  const Base = useCallback(
    ({ children }: { children: React.ReactNode }) => {
      if (props.to) {
        return <Link href={props.to}>{children}</Link>;
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
      <div className="relative h-full max-w-sm m-auto bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800">
        {renderImage()}
        <div className="p-5">
          {renderTitle()}
          {renderDescription()}
        </div>
      </div>
    </Base>
  );
}
