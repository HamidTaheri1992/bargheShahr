import { Link } from "@mui/material";
import Image from "next/image";
import "./style.css";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="logoStyle"
        src="/image/logo.jpg"
        width={40}
        height={40}
        alt=""
      />
    </Link>
  );
}
