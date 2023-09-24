import { Grid, Typography } from "@mui/material";
import data from "../../public/data/data.json";
import Menu from "../menu/menu";
import "./style.css";

const aboutItem: MainType[] = data.aboutitem;
const brandItem: MainType[] = data.branditem;
const productItem: MainType[] = data.productitem;

export default function Footer() {
  return (
    <Grid className="flexColumnColor">
      <Grid className="flexEvently">
        <Grid>
          <Menu data={aboutItem} />
        </Grid>
        <Grid>
          <Menu data={productItem} />
        </Grid>
        <Grid>
          <Menu data={brandItem} />
        </Grid>
      </Grid>
      <Grid className="flexColumn">
        <Typography className="textCenterMedium">
          در برق شهر می توانید اطمینان یابید که محصول شما از کیفیت بالایی
          برخوردار است و همه محصولات دارای گارانتی که باعث می شود با خیال راحت
          تری خریدتان را انجام دهید.
        </Typography>
        <Typography className="textCenterSmall">
          کلیه حقوق این پیج در اختیار برق شهر میباشد و هر گونه کپی برداری پیگرد
          قانونی دارد.
        </Typography>
      </Grid>
    </Grid>
  );
}
