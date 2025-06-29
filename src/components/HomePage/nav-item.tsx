import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  name: string;
}

function NavItem({ href, name }: Props) {
  return (
    <Link
      href={href}
      className="text-sm font-semibold text-gray-200 hover:text-white transition-colors"
    >
      {name}
    </Link>
  );
}

export default NavItem;
