import React, { useMemo } from "react";
import Image from "next/image";
import type { Asset } from "contentful";

interface PropsType {
  image?: Asset;
}

export default function Thubmnail(props: PropsType) {
  const url = props.image?.fields.file.url || "/vercel.svg";
  return <Image src={`https:${url}`} width={500} height={500} alt={""} />;
}
