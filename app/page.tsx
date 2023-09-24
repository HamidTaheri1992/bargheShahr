import styles from "./page.module.css";
import Slider from "../components/slider/slider";
import data from "../public/data/data.json";
import RowMediaCard from "@/components/rowMediaCard/rowMediaCard";

const brandItem: ImageType[] = data.branditem;
const productItem: ImageType[] = data.productitem;

export default function Home() {
  return (
    <main className={styles.main}>
      <Slider data={brandItem} />
      <RowMediaCard data={productItem} />
      <RowMediaCard data={brandItem} />
    </main>
  );
}
