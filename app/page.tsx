import Notification from "@/component/Notification";
import "@mantine/carousel/styles.css";
import List from "@/component/List";
import ShopeeMall from "@/component/ShopeeMall";
export default function Home() {
  return (
    <main>
      <Notification />
      <List />
      <ShopeeMall />
    </main>
  );
}
