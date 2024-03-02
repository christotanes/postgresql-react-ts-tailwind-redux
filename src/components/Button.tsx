import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import type { ButtonChildProps } from "../util/types";

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  onClick,
  ...rest
}: ButtonChildProps) {
  const classes = twMerge(
    classNames("px-2 py-1 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      rounded: rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
  );

  return (
    <button {...rest} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
