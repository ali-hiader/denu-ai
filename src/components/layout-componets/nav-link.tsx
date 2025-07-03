"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  link: string;
  name: string;
}

function NavLink({ link, name }: Props) {
  const path = usePathname();

  return (
    <Link
      href={link}
      className={`${
        path.startsWith(link)
          ? "ring-inset ring-[1px] ring-white/20 shadow-[inset_0_0_8px_2px_rgba(179,83,235,0.4),inset_0_0_2px_rgba(255,255,255,0.2)]"
          : ""
      } px-5 py-2.5 flex gap-2.5 rounded-lg h-full`}
    >
      <small className="text-sm leading-5 text-white">
        <span className="text-white text-sm font-medium">{name}</span>
      </small>
    </Link>
  );
}

export default NavLink;
