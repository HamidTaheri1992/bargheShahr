"use client";
import { Grid } from "@mui/material";
import "./style.css";
import Logo from "../../logo/logo";
import Search from "../../search/search";
import Dashboard from "../../dashboard/dashboard";
import { useState, useEffect } from "react";

export default function MainHeaderMenu() {
  const [navHeight, setnavHeight] = useState("4.5rem");

  const listenScrollEvent = () => {
    window.scrollY > 10;
    window.scrollY > 10 ? setnavHeight("3.5rem") : setnavHeight("4.5rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  //Style
  const gridStyle = {
    transition: "all 1s",
    height: navHeight,
  };
  return (
    <Grid className="mainHeaderMenuStyle" style={gridStyle}>
      <Logo />
      <Search />
      <Dashboard />
    </Grid>
  );
}
