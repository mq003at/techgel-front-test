import Image from "next/image";

export interface ImageWrapperProps {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  title: string;
}

export default function ImageWrapper({ src, alt, title }: ImageWrapperProps) {
  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={800}
      height={400}
    />
  );
}
