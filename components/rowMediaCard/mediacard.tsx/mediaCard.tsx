import Link from "next/link";
import Image from "next/image";
import "./style.css";

export default function MediaCard({ data }: { data: ImageType[] }) {
  return (
    <ul className="mediaCardStyle">
      {data.map((item) => (
        <Link className="linkMediaCardStyle" href={item.href} key={item.id}>
          <Image src={item.src} alt={item.title} height={140} width={200} />
          <h2>{item.title}</h2>
          <h5>در این بخش هر انچه در مورد {item.title} لازم دارید موجود است</h5>
        </Link>
      ))}
    </ul>
  );
}
