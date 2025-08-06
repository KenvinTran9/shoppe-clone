import { Goods } from "./constant";
import Image from "next/image";
function Good() {
  return (
    <div className="title">
      <div className="text-center">
        <h1>Gợi ý hôm nay</h1>
      </div>
      <div></div>
      <div className="grid grid-cols-6">
        {Goods.map((item, index) => (
          <div
            key={`${item.title}-${item.image}-${index}`}
            className="bg-white hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          >
            <Image width={100} height={100} src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.badges.join(", ")}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}
export default Good;
