import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { TfiBell } from "react-icons/tfi";
import { SlQuestion } from "react-icons/sl";
import { TfiWorld } from "react-icons/tfi";
import Image from "next/image";
function Header() {
  return (
    <div className="bg-gradient-to-r from-[#ee4d2d] to-[#ff7337] text-[#fef6f5] font-sans text-sm p-3">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a>Kênh Người Bán</a>|<a>Trở thành Người bán Shoppe</a>|
            <a>Tải ứng dụng</a>|
            <div className="flex gap-1 items-center">
              <a>Kết nối</a>
              <MdFacebook className="size-5" />
              <FaInstagram className="size-5 fill-white" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-1 items-center">
              <TfiBell className="size-4 fill-white" />
              <a>Thông Báo</a>
            </div>
            <div className="flex gap-1 items-center">
              <SlQuestion className="size-4 fill-white" />
              <a>Hỗ Trợ</a>
            </div>
            <div className="flex gap-1 items-center">
              <TfiWorld className="size-4 fill-white" />
              <a>Tiếng Việt</a>
            </div>
            <a>Đăng ký</a>|<a>Đăng nhập</a>
          </div>
        </div>

        <div className="flex items-center gap-9 mt-5">
          <div>
            <Image
              src={"/shopee-logo-3.jpg"}
              width={120}
              height={40}
              alt="logo-shopee"
            ></Image>
          </div>

          <div className="flex items-center flex-1 gap-5">
            <div className="flex-1">
              <div className="relative w-[90%]">
                <input
                  type="text"
                  placeholder="Shoppe Bao ship 0Đ - Đăng ký ngay!"
                  className="w-full px-2 py-3 border-none rounded-sm bg-white text-gray-700"
                />
                <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#ee4d2d] to-[#ff7337] px-6 py-3 rounded-sm hover:opacity-90">
                  <IoIosSearch className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <a>Áo Phông Đẹp</a>
                <a>Săn Sale 1k Điện Thoại iPhone</a>
                <a>Quần Ống Rộng Nữ Vải Đủi Mát</a>
                <a>Dép Đẹp</a>
                <a>Son Romand Juicy 24</a>
                <a>Combo 6 Món Ăn Vặt</a>
                <a>Dép</a>
              </div>
            </div>

            <PiShoppingCartSimple className="size-7 fill-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;