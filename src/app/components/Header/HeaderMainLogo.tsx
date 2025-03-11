import Image from "next/image";

export default function HeaderMainLogo() {
  return (
    <div className="absolute top-0 h-[88px] bg-transparent text-center content-center  left-1/2 transform -translate-x-1/2">
      <Image
        src="/assets/logo-main-250.png"
        alt="Techgel Main Logo"
        title="Techgel Main Logo"
        width={250}
        height={60}
      />
    </div>
  );
}
