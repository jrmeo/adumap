"use client";

import style from "./signup.module.css";
import { TextField, Button } from "@mui/material";
import logo from "../../public/logo_aduOrg.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import prisma from "../api/db";
import { isEmailValid } from "./validation";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email.toLowerCase().endsWith("@adamson.edu.ph")) {
      alert("Please use a valid AdU email address ending with @adamson.edu.ph");
      return;
    }

    try {
      // Use Prisma to create a new user in your PostgreSQL database
      const user = await prisma.user.create({
        data: {
          email: formData.email,
          password: formData.password,
          username: formData.username,
        },
      });

      // Add any additional logic you need here

      alert("User registered successfully!");
    } catch (error) {
      alert("Error registering user: " + error.message);
    }
  }

  return (
    <div className={style.container}>
      <div className={style.logo_box}>
        <Image
          src={logo}
          width={500}
          height={500}
          alt="Logo of Adu Org"
          className={style.logo_design}
        />
      </div>
      <div className={style.login_box}>
        <Image src={logo} width={200} height={200} alt="Logo of Adu Org" />
        <h4 className={style.register_quote}>
          Register to be aware of what’s happening.
        </h4>
        <form className={style.form_design} onSubmit={handleSubmit}>
          <div className={style.tf_box}>
          <TextField
            label="Username"
            variant="filled"
            type="text"
            className={style.login_tf}
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
            <TextField
              label="AdU Email Address"
              variant="filled"
              type="email"
              className={style.login_tf}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              className={style.login_tf}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className={style.button_grp}>
            <Button
              type="submit"
              variant="contained"
              className={style.button_design}
              onClick={handleSubmit}
            >
              REGISTER
            </Button>
            <Link href="/login">Already have an Account? Click here.</Link>
          </div>
        </form>
      </div>
    </div>
  );
}