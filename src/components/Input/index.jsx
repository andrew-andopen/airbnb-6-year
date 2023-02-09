import React from "react";

import { useForm } from "react-hook-form";
import { StyledInput } from "./styles";

const Input = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <StyledInput
      type="text"
      name="firstname"
      placeholder="First name"
      register={{ ...register("firstname", { required: true }) }}
      errors={errors.firstname && <p>First name is required</p>}
    />
  );
};

export default Input;
