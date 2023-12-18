"use client";

import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Button,
  Typography,
  ButtonGroup,
  Paper,
} from "@mui/material";
import style from "./filter.module.css";
import RocketIcon from "@mui/icons-material/Rocket";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function FilterBar() {
  return (
    <Paper className={style.cardr}>
      <Button className={style.button}>
        <NewReleasesIcon></NewReleasesIcon>New
      </Button>
      <Button className={style.button}>
        <StarHalfIcon></StarHalfIcon>Top
      </Button>
      <Button className={style.button}>
        <MoreHorizIcon></MoreHorizIcon>
      </Button>
    </Paper>
  );
}
