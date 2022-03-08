import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  className?: string;
  profileImage: StaticImageData;
}

export default function DefaultButton(props: AvatarProps) {
  return (
    <div className={props.className}>
      <div className="aspect-square h-28 md:h-32">
        <Image priority src={props.profileImage} alt="Profile" />
      </div>
    </div>
  );
}
