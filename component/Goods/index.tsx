import { Goods } from "./constant";
import Image from "next/image";
function Good() {
  return (
    <div className="title">
      <div className="text-center"> 
        <h1 className="text-xl py-4 border-b-4 border-orange-600 bg-white text-orange-600 m-4  ">GỢI Ý HÔM NAY</h1>
      </div>
      <div></div>
      <div className="grid grid-cols-6 gap-4">
        {Goods.map((item, index) => (
          <div
            key={`${item.title}-${item.image}-${index}`}
            className="bg-white hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-gray-50 rounded"
          >
            <Image width={200} height={200} src={item.image} alt={item.title} />
            <div>
              <div>
                <h2><span className="text-xs bg-red-500 text-white px-1 py-0.5 rounded">yêu thích</span> {item.title}</h2>
                <span className="border-red-400 border text-red-500 p-0.5 rounded text-xs">{item.badges.join(", ")}</span>
                <span className="text-red-500 flex">đ<p>{item.price.toLocaleString("vi-VN")}</p></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}
export default Good;
