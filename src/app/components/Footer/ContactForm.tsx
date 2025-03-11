"use client";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("Form Data:");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-[150px] px-[50px] flex flex-col  mt-[50px] gap-[10px] bg-[#dfdfdf]"
    >
      <input
        type="text"
        placeholder="Họ Tên"
        {...register("name", { required: "Name is required" })}
        className="w-full p-2 border rounded bg-white"
      />
      <input
        type="text"
        placeholder="Công Ty"
        {...register("company", { required: "Name is required" })}
        className="w-full p-2 border rounded bg-white"
      />
      <input
        type="text"
        placeholder="Số Điện Thoại"
        {...register("phone", { required: "Name is required" })}
        className="w-full p-2 border rounded bg-white"
      />

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
        className="w-full p-2 border rounded bg-white"
      />

      <textarea
        placeholder="Thông tin Liên lạc"
        {...register("message")}
        className="w-full p-2 border rounded bg-white"
      />

      <div className="flex flex-row-reverse gap-[10px]">
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Gửi
        </button>{" "}
        <button
          type="submit"
          className="mt-4 bg-grey text-white px-4 py-2 rounded"
        >
          Xóa
        </button>
      </div>
    </form>
  );
}
