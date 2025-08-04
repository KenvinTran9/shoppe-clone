import { Carousel, CarouselSlide } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import Image from "next/image";

function Notification() {
  return (
    <div className="grid grid-cols-3 mx-auto">
      <div className="col-span-2">
        <Carousel withIndicators height={350}>
          <CarouselSlide>
            <Image
              src="/Caroseul1.jpg"
              alt="Slide 1"
              width={800}
              height={350}
              className="flex-1 object-cover"
            />
          </CarouselSlide>
          {/* <CarouselSlide>
            <Image
              src="/Caroseul2.jpg"
              alt="Slide 2"
              width={800}
              height={350}
              className=" object-cover"
            />
          </CarouselSlide>
          <CarouselSlide>
            <Image
              src="/Caroseul3.jpg"
              alt="Slide 3"
              width={800}
              height={350}
              className=" object-cover"
            />
          </CarouselSlide> */}
        </Carousel>
      </div>

      <div className="flex flex-col gap-2">
        <div className="relative ">
          <Image
            src="/Caroseul/Extra.jpg"
            alt="Fixed 1"
            height={800}
            width={350}
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/Caroseul/Sieusale.jpg"
            alt="Fixed 2"
            height={800}
            width={350}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Notification;
