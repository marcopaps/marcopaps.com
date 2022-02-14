import React from 'react';
import Image from 'next/image';
import Profile from 'public/profile.webp';

interface AvatarProps {
  className?: string;
}

export default function DefaultButton(props: AvatarProps) {
  return (
    <div className={props.className}>
      <div className="aspect-square h-28 md:h-32">
        <Image priority src={Profile} alt="Profile" />
      </div>
    </div>
  );
}
