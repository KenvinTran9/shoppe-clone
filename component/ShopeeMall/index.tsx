import Image from "next/image";
import { Sales } from "./constant";
import { IoIosArrowDroprightCircle } from "react-icons/io";
function ShopeeMall() {
  return (
    <div className="bg-white title text-base mt-4 p-4">
      <div className="flex justify-between mx-auto border-b border-gray-200">
        <div className="flex gap-4 p-2">
          <h1 className="text-orange-700 text-lg">SHOPEE MALL</h1>
          <span className="text-gray-200">|</span>
          <div className="flex gap-2">
            <Image alt="back" src="/Icon/back.png" width={20} height={10} />
            <span>Trả Hàng Miễn Phí 15 Ngày</span>
          </div>
          <div className="flex gap-2">
            <Image alt="back" src="/Icon/khien.png" width={20} height={10} />
            <span>Hàng Chính Hãng 100%</span>
          </div>
          <div className="flex gap-2">
            <Image alt="back" src="/Icon/bus.png" width={20} height={10} />
            <span>Miễn Phí Vận Chuyển</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <span className="text-red-700">Xem Tất Cả</span>
          <IoIosArrowDroprightCircle className="text-red-700" size={20} />
        </div>
      </div>

      <div className="grid grid-cols-2 mt-4">
        <div>
          <Image
            src="/ShopeeMall/Sandeal.jpg"
            height={380}
            width={400}
            alt="San sale"
          />
        </div>
        <div className="grid grid-cols-4">
          {Sales.map((sale, index) => (
            <div key={`${sale.title}-${index}`} className="flex flex-col items-center">
              <div>
                <Image
                  src={sale.image}
                  alt={sale.title}
                  width={500}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-lg text-red-700">
                {sale.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ShopeeMall;
