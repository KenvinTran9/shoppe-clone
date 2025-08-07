import { Categories} from "./contanst";
import Image from "next/image";

function List() {
  return (
    <div className="w-[90%] mx-auto py-6 bg-white rounded">

      <h3 className="text-base font-semibold text-gray-800 mb-6">
        DANH MỤC
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-y-6">
        {Categories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col items-center justify-center text-center border-b border-gray-200 border-r"
          >
            <div>
              <Image
                src={category.image}
                alt={category.title}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <p className="mt-2 text-xs font-medium text-gray-700">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
