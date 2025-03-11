import ImageWrapper, { ImageWrapperProps } from "../Misc/ImageWrapper";

export default function CarouselItem(props: ImageWrapperProps) {
  return (
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <ImageWrapper {...props} />
    </div>
  );
}
