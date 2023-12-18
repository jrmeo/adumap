'use client';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import style from './orgpage.module.css';
import Navbar from "../components/navbar/navbar";
import Image from 'next/image';
import logo from "../../public/avatar_placeholder.png";
import logo2 from "../../public/logo_aduOrg.png"

export default function Orgpage() {
  return (
    <div className={style.parent}>
      <div className={style.header_background}>
        <Navbar />
        <Grid container spacing={2}>
          <Grid item xs={6} className={style.text_container}>
            <Typography variant="h3" className={style.customHeading} style={{ marginLeft: '150px' }}>
              Find organizations that suit your interests.
            </Typography>
            <p className={style.customParagraph} style={{ marginLeft: '150px' }}>
              It is interesting to find people that have similar interests with you. Scroll down below to find what organization suits you best.
            </p>
          </Grid>
          <Grid item xs={6}>
            <Image src={logo2} alt="Image Description" className={style.image} />
          </Grid>
        </Grid>
      </div>
      
      <div className={style.bottom_half}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h2" className={style.customBottom} style={{ marginLeft: '100px' }}>
             Organizations
            </Typography>
          </Grid>
          <Grid item xs={6} className={style.bottomRight}>
            <div className={style.inputContainer}>
              <input type="text"  className={style.textbox} style={{ marginLeft: '270px' }}/>
              <button className={style.button}>Search</button>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2} className={style.table}>
          {/* Create a 2x3 table with images and text */}
          <Grid item xs={4}>
            <Image src={logo} alt="Image 1" className={style.tableImage} />
            <p className= {style.orgpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Grid>
          <Grid item xs={4}>
            <Image src={logo} alt="Image 2" className={style.tableImage} />
            <p className= {style.orgpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Grid>
          <Grid item xs={4}>
            <Image src={logo} alt="Image 3" className={style.tableImage} />
            <p className= {style.orgpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Grid>
          <Grid item xs={4}>
            <Image src={logo} alt="Image 4" className={style.tableImage} />
            <p className= {style.orgpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Grid>
          <Grid item xs={4}>
            <Image src={logo} alt="Image 5" className={style.tableImage} />
            <p className= {style.orgpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Grid>
          <Grid item xs={4}>
            <Image src={logo} alt="Image 6" className={style.tableImage} />
            <p className= {style.orgpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

