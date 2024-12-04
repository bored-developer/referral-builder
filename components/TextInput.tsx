import { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export default function TextInput(props: {
  errorType?: string;
  label: string;
  register: UseFormRegisterReturn;
  type?: HTMLInputTypeAttribute;
}) {
  const { errorType, label, register, type = "text" } = props;

  // @TODO: Error mapping for used types
  return (
    <label className="block">
      <span className="block text-[10px] text-grey">{label}</span>
      <input type={type} {...register} className="w-full" />
      {errorType && (
        <span role="alert" className="text-[10px] text-red-500">
          {errorType === "required"
            ? "This field is required"
            : "Invalid input"}
        </span>
      )}
    </label>
  );
}
