'use client'

import { ButtonProps } from "@/utils/interfaces"
import { Button as NextUIButton } from "@nextui-org/react"



export default function Button({ 
  children, 
  onClick, 
  color = "primary",
  variant = "solid",
  size = "md",
  type = "button"
}: ButtonProps) {
  return (
    <NextUIButton
      onClick={onClick}
      color={color}
      variant={variant}
      size={size}
      type={type}
      className="w-full mt-10 h-14 text-lg font-semibold"
    >
      {children}
    </NextUIButton>
  )
}
