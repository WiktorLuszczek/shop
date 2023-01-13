import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/schema";

export const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{email: string}>({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data: {email: string}) => {
    console.log(data)
  }
  return (
    <div className="text-center">
      <div className="text-xl">Join our Newsletter</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="text-black block mx-auto m-1 px-2 rounded-lg" type="text" placeholder="Email..." {...register("email")} />
          <span className="block">{errors?.email?.message}</span>
          <input className="cursor-pointer bg-gray-50 text-black px-2 rounded-lg mt-2" type="submit" id="submit" value="Subscribe!"/>
        </form>
    </div>
  );
};
