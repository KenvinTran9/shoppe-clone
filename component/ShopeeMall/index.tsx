import Image from "next/image";
import { Sales } from "./constant";
function ShopeeMall() {
  return (
    <div className="bg-white">
      <div className="flex justify-between mx-auto">
        <div className="flex gap-2">
          <h1>SHOPEE MALL</h1>
          <span>Trả Hàng Miễn Phí 15 Ngày</span>
          <span>Hàng Chính Hãng 100%</span>
          <span>Miễn Phí Vận Chuyển</span>
        </div>
        <div>
          <span>Xem Tất Cả</span>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <Image
            src="/ShopeeMall/Sandeal.jpg"
            height={390}
            width={400}
            alt="San sale"
          />
        </div>
        <div className="grid grid-cols-4">
          {Sales.map((sale, index) => (
            <div
              key={`${sale.title}-${index}`}
              className=""
            >
              <div>
                <Image
                  src={sale.image}
                  alt={sale.title}
                  width={500}
                  height={100}
                  className="object-contain" 
                />
              </div>
              <p className="mt-2 text-xs font-medium text-gray-700">
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
