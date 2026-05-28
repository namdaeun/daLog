import type { ButtonHTMLAttributes } from "react";
import { buttonStyle } from "./styles.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text";
}

const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  return (
    <button type="button" className={buttonStyle({ type: variant })} {...props}>
      {children}
    </button>
  );
};

export default Button;
