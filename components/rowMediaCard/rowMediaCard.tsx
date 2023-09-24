import { Grid } from "@mui/material";
import MediaCard from "./mediacard.tsx/mediaCard";
import "./style.css";

export default function RowMediaCard({ data }: { data: ImageType[] }) {
  return (
    <Grid className="rowMediaCardStyle">
      <MediaCard data={data} />
    </Grid>
  );
}
