import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const WorkTermReportCard = ({ workTermReportEntry, setSelectedWtr }) => {
  console.log(workTermReportEntry);
  return (
    <Card
      sx={{ maxWidth: 345 }}
      onClick={() => setSelectedWtr(workTermReportEntry)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={workTermReportEntry?.image}
          alt={workTermReportEntry.title}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {workTermReportEntry.title}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {workTermReportEntry.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default WorkTermReportCard;
