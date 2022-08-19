import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Head from "next/head";
import Button from "../components/button/Button";
import Field from "../components/field/Field";
import Label from "../components/label/Label";
import { Input } from "../components/input/Input";
import AuthenticationPage from "../components/authenpage/AuthenticationPage";

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const Home = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <AuthenticationPage>
          <form
            className="form"
            // onSubmit={handleSub}
            autoComplete="off"
          >
            <Field>
              <Label htmlFor="fullname">Fullname</Label>
              <Input
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
                control={control}
              />
            </Field>
            <Field>
              <Label htmlFor="email">Email address</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                control={control}
              />
            </Field>
            <Field>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                control={control}
              />
            </Field>
            <div className="have-account">
              You already have an account? <Link href={"/signin"}>Login</Link>{" "}
            </div>
            <Button type="submit" isLoading={isSubmitting} kind="primary">
              Sign Up
            </Button>
          </form>
        </AuthenticationPage>
      </div>
    </>
  );
};

export default Home;
