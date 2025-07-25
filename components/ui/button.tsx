import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "link";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
}) => {
  let baseStyle =
    "py-2 px-6 rounded-md font-poppins text-base cursor-pointer transition-all duration-200 flex items-center justify-center";
  let variantStyle = "";

  switch (variant) {
    case "primary":
      variantStyle = "bg-primary text-background hover:bg-primary/90";
      break;
    case "secondary":
      variantStyle = "bg-gray-200 text-gray-600 hover:bg-gray-300";
      break;
    case "link":
      variantStyle =
        "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300";
      break;
    default:
      variantStyle = "";
  }

  return (
    <button
      type="button"
      className={`${baseStyle} ${variantStyle} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
