import { Grid } from "@mui/material";
import "./style.css";
import HeaderMenu from "./headerMenu/headerMenu";
import MainHeaderMenu from "./mainHeaderMenu/mainHeaderMenu";
import Name from "../name/name";

export default function Header() {
  return (
    <Grid className="HeaderStyle">
      <MainHeaderMenu />
      <Name />
      <HeaderMenu />
    </Grid>
  );
}
