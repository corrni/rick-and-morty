import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  defaultSize: number;
  imgSrc: string;
  title: string;
  href: string;
}

export const CharacterCard: React.FC<Props> = ({
  defaultSize,
  href,
  imgSrc,
  title,
}) => {
  return (
    <Link href={href}>
      <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <Image
          width={defaultSize}
          height={defaultSize}
          src={imgSrc}
          alt={title}
          className="pointer-events-none object-cover group-hover:opacity-75"
        />
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {title}
      </p>
    </Link>
  );
};
