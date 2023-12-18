"use client";

import Image from "next/image";
import style from "./orgfeed.module.css";
import Navbar from "../components/navbar/navbar";
import {
  Button,
  IconButton,
  Avatar,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import React, { useState } from "react";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Accord from "../components/accordion/accordion";
import ImagePH from "@/public/avatar_placeholder.png";

export default function Orgfeed() {
  const header = {
    organization_name: "Adu-Game",
    subtitle: "adugame",
    sub_count: "1",
  };

  const accordionDetails = {
    title: "History",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget mattis enim, non efficitur augue. Quisque nec hendrerit sapien, non aliquam lorem.",
    image: ImagePH,
  };

  return (
    <div className={style.parent}>
      <div>
        <div className={style.header_background}>
          <Navbar />
        </div>
      </div>

      <div className={style.header_design}>
        <div className={style.header_imagebox}>
          <Avatar
            alt="Remy Sharp"
            src="../../public/placeholder_orgfeed.png"
            sx={{ width: 300, height: 300 }}
            className={style.avatar_design}
          />
        </div>

        <div className={style.sample_design}>
          <div>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", fontSize: "50px" }}
            >
              {header.organization_name}
            </Typography>
            <span>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textTransform: "lowercase",
                  fontSize: "30px",
                }}
              >
                @{header.subtitle}
              </Typography>
            </span>
          </div>

          <div className={style.button_group}>
            <Button variant="contained" className={style.button_design}>
              {header.sub_count} Subscribe
            </Button>

            <IconButton
              aria-label="notification"
              className={style.iconbtn_design}
            >
              <NotificationsOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <div className={style.accordion_div}>
        <Accord
          title={accordionDetails.title}
          image={accordionDetails.image}
          body={accordionDetails.body}
        />

        <Accord
          title="Declaration of Principles and Objectives"
          image={accordionDetails.image}
          body={accordionDetails.body}
        />
        <Accord
          title="Mission and Vision"
          image={accordionDetails.image}
          body={accordionDetails.body}
        />
      </div>
    </div>
  );
}
