import Link from "next/link";

export interface HeaderCategoryProps {
  href: string;
  title: string;
}

export default function HeaderCategory({ href, title }: HeaderCategoryProps) {
  return (
    <Link href={href} className="h-full px-[30px] block content-center text-white hover:bg-on-active bg-pale">
      {title.toUpperCase()}
    </Link>
  );
}
