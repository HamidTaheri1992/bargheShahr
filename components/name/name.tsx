import { Typography } from "@mui/material";
import Link from "next/link";
import "./style.css";

export default function Name() {
  return (
    <Link href="/">
      <Typography className="nameStyle">برق شهر ۱۱۰</Typography>
    </Link>
  );
}
