
// export default function ContactBox() {
//   const { t } = useTranslation("contact");
//   return (
//     <div>
//       <h2 className="text-xl font-bold text-white">
//         {t("title").toUpperCase()}
//       </h2>
//       <p className="text-white">{t("location")}</p>
//       <p className="text-white">{t("phone")}</p>
//       <p className="text-white">{t("email")}</p>
//     </div>
//   );
// }

export default function ContactBox() {
  return (
    <div className="flex flex-col gap-6 bg-[#437cc6] py-[180px] px-[30px] mt-[50px] text-white">
      <h2 className="text-xl font-bold ">
        Công Ty CP Kỹ Thuật Công Nghệ Sài Gòn
      </h2>
      <p className="">30 Phan Chu Trinh, Phường 2, Quận Bình Thạnh, Thành phố Hồ Chí Minh</p>
      <p className="">028 3510 7030</p>
      <p className="">techgel@techgel.com</p>
    </div>
  );
}