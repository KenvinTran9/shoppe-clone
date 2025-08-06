import { Carousel, CarouselSlide } from "@mantine/carousel";
import Image from "next/image";

function Notification() {
  return (
    <div className="flex max-w-7xl mx-auto gap-4">
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
  );
}

export default Notification;
