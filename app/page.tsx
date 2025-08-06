import Notification from "@/component/Notification";
import "@mantine/carousel/styles.css";
import List from "@/component/List";
import ShopeeMall from "@/component/ShopeeMall";
import Search from "@/component/Search";
import Good from "@/component/Goods";
export default function Home() {
  return (
    <main className="bg-gray-50">
      <Notification />
      <List />
      <ShopeeMall />
      <Search />
      <Good />
    </main>
  );
}
