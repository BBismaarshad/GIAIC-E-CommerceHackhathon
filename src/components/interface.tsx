import React from "react";
import Link from "next/link";
const Interface = ({
  // scr,
  // alt,
  // title,
  // description,
  // price,
  category,
  slug,
}: {
  // scr: string;
  // alt: string;
  // title: string;
  // description: string;
  // price: number;
  category: string;
  slug: string;
}) => {
  return (
    <div>
      <Link href={`/${category}/${slug}`}></Link>
    </div>
  );
};

export default Interface;
