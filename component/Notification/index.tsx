import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

function Notification() {
  return (
    <Carousel withIndicators height={20}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
    </Carousel>
  );
}

export default Notification;