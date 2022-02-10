import React from "react";

interface AvatarProps {
  className?: string;
}

export default function DefaultButton(props: AvatarProps) {
  return (
    <div className={props.className}>
      <img
        className="max-h-24 md:max-h-32 lg:max-h-48"
        src="profile.jpg"
        alt="profile"
      />
    </div>
  );
}
