"use client";
import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import React from "react";
import Button from "./Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "Login" | "Register";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("Login");
  const [isLoading, setIsLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    if (variant === "Login") {
      setVariant("Register");
    } else {
      setVariant("Login");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  // const onSubmit = useCallback(async (data: FieldValues) => { });
  const onSubmit: SubmitHandler<FieldValues> = useCallback((data) => {
    setIsLoading(true);
    if (variant === "Login") {
      //  axios register
    }
    if (variant === "Register") {
      //  axios register
    }
  }, []);
  const socialAction = (action: string) => {
    setIsLoading(true);
  };

  return (
    <>
      <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 ">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {variant === "Register" && (
              <Input
                id="name"
                label="Name"
                type="text"
                register={register}
                errors={errors}
              />
            )}
            <Input
              id="email"
              label="Email address"
              type="email"
              register={register}
              errors={errors}
            />
            <Input
              id="password"
              label="password"
              type="password"
              register={register}
              errors={errors}
            />
            <div>
              <Button disabled={isLoading} fullWidth type="submit">
                {variant === "Login" ? "Login" : "Register"}
              </Button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className=" bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <AuthSocialButton
                icon={BsGithub}
                onClick={() => socialAction("google")}
              />
              <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialAction("google")}
              />
            </div>
          </div>

          <div
            className="flex gap-2 justify-center text sm
            mt-6 px-2 text-gray-500"
          >
            <div>
              {" "}
              {variant === "Login"
                ? "New to Messenger ?"
                : "Already have a account "}
            </div>
            <div onClick={toggleVariant} className="underline cursor-pointer">
              {variant === "Login" ? "Create an Account" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
