"use client"

import { InputButtonProps } from "@/utils/interfaces";
import { Input } from "@nextui-org/react";



export const InputButton = ({
  label = "Amount to be transferred",
  id = "amountToBeTransferred",
  placeholder = "0.00",
  onChange,
  value,
  type = "number",
}: InputButtonProps) => {
  return (
    <div className="">
      <label htmlFor={id} className="block text-slate-900 font-semibold">
        {label}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        labelPlacement="outside"
        value={value?.toString()}
        onChange={(e) => onChange?.(e.target.value)}
        startContent={
          type === "number" ? (
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">GH₵</span>
            </div>
          ) : null
        }
        className="mt-2"
      />
    </div>
  );
};