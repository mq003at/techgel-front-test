import Image from "next/image";
export interface IconWrapperProps {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  title: string;
  color?: string;
}

export default function IconWrapper({
  width = 25,
  height = 25,
  src,
  alt,
  title,
  color = "black",
}: IconWrapperProps) {
  return (
    <Image
      style={{ height: `${height}px !important` }}
      height={height}
      width={width}
      src={src}
      alt={alt}
      title={title}
      className={`text-${color}`}
    />
  );
}
