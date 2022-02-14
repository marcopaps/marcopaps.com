import React from 'react';
import Image from 'next/image';
interface AvatarProps {
  className?: string;
}

export default function DefaultButton(props: AvatarProps) {
  return (
    <div className={props.className}>
      <Image
        className="max-h-32 lg:max-h-48"
        src="/profile.webp"
        alt="Profile"
        width={150}
        height={150}
      />
    </div>
  );
}
