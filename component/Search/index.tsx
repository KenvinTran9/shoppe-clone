import { Serums } from "./constant";
import Image from "next/image";
function Search() {
  return (
    <div className="title ">
      <div className="flex items-center justify-between mb-4">
        <h1>Tìm kiếm hàng đầu</h1>
        <span>Xem Tất Cả</span>
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
