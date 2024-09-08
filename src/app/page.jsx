import Navbar from "@/components/navbar/Navbar";
import styles from "./homepage.module.css";
import Footer from "@/components/footer/Footer";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/menu/Menu";
import CardList from "@/components/cardList/CardList";
import ScrollUp from "@/components/scrollUp/ScrollUp";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />

      <div className={styles.content}>
        <Menu />
        <CardList />
      </div>
    </div>
  );
}
