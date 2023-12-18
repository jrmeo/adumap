"use client";

import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Button,
  Typography,
  ButtonGroup,
} from "@mui/material";
import style from "./blank.module.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
export default function Footer() {
  return (
    <Card className={style.cardr}>
      <CardContent>
        <div className={style.d_flex}>
          <div className={style.foot}>
            <Typography textAlign="left">User Agreement</Typography>
            <Typography textAlign="left">Privacy Policy</Typography>
            <Typography textAlign="left">Content Policy</Typography>
            <Typography textAlign="left">Code of Conduct</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
