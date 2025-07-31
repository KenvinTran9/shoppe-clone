import Image from "next/image";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Notification from "@/component/Notification";
import '@mantine/carousel/styles.css';
import List from "@/component/List";
export default function Home() {
  return (
    <main>
      <Notification/>
      <List/>
    </main>
  );
}
