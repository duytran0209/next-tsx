import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthenticationPage from "../components/authenpage/AuthenticationPage";
import Field from "../components/field/Field";
import Label from "../components/label/Label";
import { Input } from "../components/input/Input";
import Button from "../components/button/Button";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter valid email address")
      .required("Please enter your email address"),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters or greater")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Your password must have at least 1 uppercase, 1 lowercase, 1 special character",
        }
      ),
  })
  .required();
const SignInPage = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid, isSubmitting, errors, isSubmitSuccessful },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = () => {
    if (!isValid) return;
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
        reset({
          email: "",
          password: "",
        });
      }, 5000);
    });
  };

  return (
    <AuthenticationPage>
      <form
        style={{ marginTop: "80px" }}
        className="form"
        onSubmit={handleSubmit(onSubmitHandler)}
        autoComplete="off"
      >
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            control={control}
          />
        </Field>
        {/* {errors.email && <div className="error">{errors.email.message}</div>} */}
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            control={control}
          />
        </Field>
        <div className="have-account">
          You have not had an account?{" "}
          <Link href={"/signup"}>Register an account</Link>
        </div>
        <Button type="submit" isLoading={isSubmitting}>
          Login
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
