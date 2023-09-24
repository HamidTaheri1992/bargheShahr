import "./style.css";
import { Grid } from "@mui/material";
import data from "../../../public/data/data.json";
import Link from "next/link";

export default function HeaderMenu() {
  const aboutitem: MainType[] = data.aboutitem;
  return (
    <nav>
      <ul className="headerMenuStyle">
        {aboutitem.map((item) => (
          <Link href={item.href} key={item.id}>
            <Grid>{item.title}</Grid>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
