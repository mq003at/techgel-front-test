import Link from "next/link";
import HeaderCategory, { HeaderCategoryProps } from "./HeaderCategory";
import HeaderMainLogo from "./HeaderMainLogo";
import IconWrapper from "../Misc/IconWrapper";

export default function Header() {
  const headerCategories: HeaderCategoryProps[] = [
    { href: "/about-page", title: "Giới Thiệu" },
    { href: "/services", title: "Dịch Vụ" },
    { href: "/projects", title: "Dự Án" },
    { href: "/library", title: "Thư Viện" },
    { href: "/news", title: "Tin Tức" },
    { href: "/contact", title: "Liên Hệ" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="w-full">
        <HeaderMainLogo />
        <div className="absolute top-[88px] w-full h-[44px] text-center transition-all duration-300 ease-in-out z-[100] justify-items-center overflow-visible bg-main-tone">
          <nav className="h-full inline-flex items-center content-center">
            <div className="mr-[30px]">  
              <IconWrapper
                src={"assets/icon/home.svg"}
                alt="home"
                title="Home"
                color="white"
              />
            </div>
            <ul className="flex space-x-[0.25px] h-full">
              {headerCategories.map((category) => (
                <li
                  key={`header-category-${category.title}`}
                  className="h-full content-center border border-main-tone"
                >
                  <HeaderCategory href={category.href} title={category.title} />
                </li>
              ))}
            </ul>
            <div className="ml-[30px]">
              <IconWrapper
                src="assets/icon/search.svg"
                alt="search"
                title="Search"
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
