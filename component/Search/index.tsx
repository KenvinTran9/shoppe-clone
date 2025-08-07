import { Serums } from "./constant";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
function Search() {
  return (
    <div className="title bg-white mt-4 p-4">
      <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-4">
        <h1 className="text-orange-600 text-xl">Tìm kiếm hàng đầu</h1>
        <div className="flex items-center gap-1">
        <span className="text-orange-700">Xem Tất Cả </span>
          <IoIosArrowForward className="text-orange-700" size={20} />
        </div>
      </div>
      <div className="grid grid-cols-6">
        {Serums.map((item, index) => (
          <div key={`${item.title}-${item.image}-${index}`}>
            <Image src={item.image} alt={item.title} width={100} height={100} />
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Search;
