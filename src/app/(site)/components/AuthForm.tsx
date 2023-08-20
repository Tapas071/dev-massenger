"use client";
import { useCallback, useState } from "react";
import { Field, useForm } from "react-hook-form";
type Variant = "Login" | "Register";

import React from "react";

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
    const onSubmit = useCallback(async (data: FieldValues) => { 
        

  return <div className="">hellow auth</div>;
};

export default AuthForm;
