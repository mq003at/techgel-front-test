import IconWrapper, { IconWrapperProps } from "../Misc/IconWrapper";

const socialMedia: IconWrapperProps[] = [
  { src: "/assets/icon/facebook.svg", title: "Facebook", alt: "Facebook" },
  { src: "/assets/icon/instagram.svg", title: "Instagram", alt: "Instagram" },
  { src: "/assets/icon/tiktok.svg", title: "Tiktok", alt: "Tiktok" },
];

export default function SocialMediaBar() {
  return (
    <div className="justify-center p-[15px] flex flex-row gap-4">
      {socialMedia.map((media) => (
        <IconWrapper {...media} width={25} height={25}/>
      ))}
    </div>
  );
}
