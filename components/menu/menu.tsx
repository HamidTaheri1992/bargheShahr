import { Grid } from "@mui/material";
import Link from "next/link";
import "./style.css";

export default function Menu({ data }: { data: MainType[] }) {
  return (
    <nav>
      <ul>
        {data.map((item) => (
          <Link href={item.href} key={item.id}>
            <Grid className="menuList">{item.title}</Grid>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
