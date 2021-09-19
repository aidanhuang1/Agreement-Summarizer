import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="mt-20 w-full max-w-xl">
      <form
        action='/' methods="post"
        className="bg-white shadow-md rounded px-8 pt-6 pb-2 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Input"
          rows="8"
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("Input", { required: true })}
        />
        {/* <textarea
          type="text"
          placeholder="Output"
          rows="8"
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("Output", { required: true, pattern: /^\S+@\S+$/i })}
        /> */}

        <button
          type="submit"
          class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
