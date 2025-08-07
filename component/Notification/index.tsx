import { Carousel, CarouselSlide } from "@mantine/carousel";
import Image from "next/image";
import { Sales } from "./constant";

function Notification() {
  return (
    <div className="bg-white title w-full mt-6">
      <div className="flex title gap-4">
        <div className="flex-1">
          <Carousel withIndicators>
            <CarouselSlide>
              <Image
                src="/Caroseul/Caroseul1.jpg"
                alt="Slide 1"
                width={800}
                height={350}
                className="object-cover w-full h-full"
              />
            </CarouselSlide>
          </Carousel>
        </div>

        <div className="flex flex-col gap-2">
          <Image
            src="/Caroseul/Extra.jpg"
            alt="Fixed 1"
            height={400}
            width={350}
            className="object-cover flex-1"
          />

          <Image
            src="/Caroseul/Sieusale.jpg"
            alt="Fixed 2"
            height={400}
            width={350}
            className="object-cover flex-1"
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-6 items-center mt-6 mb-4 p-2">
          {Sales.map((sale, index) => (
            <div
              key={`${sale.title}-${index}`}
              className="flex flex-col items-center justify-center text-center"
            >
              <div>
                <Image
                  src={sale.image}
                  alt={sale.title}
                  width={48}
                  height={48}
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

export default Notification;
