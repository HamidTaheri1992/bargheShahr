"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";
import "./style.css";
import data from "../../public/data/data.json";
import Menu from "../menu/menu";

const aboutItem: MainType[] = data.aboutitem;
const brandItem: MainType[] = data.branditem;
const productItem: MainType[] = data.productitem;

type Anchor = "right";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="MuiDrawer-paper background"
    >
      <Grid className="gridStyle">
        <List>
          <Menu data={aboutItem} />
        </List>
        <Divider>محصولات ما</Divider>
        <List>
          <Menu data={productItem} />
        </List>
        <Divider>برندهای ما</Divider>
        <List>
          <Menu data={brandItem} />
        </List>
      </Grid>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="buttonStyle" onClick={toggleDrawer(anchor, true)}>
            منو
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
