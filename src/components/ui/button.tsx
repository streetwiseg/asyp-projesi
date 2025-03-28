// 📄 src/components/ui/button.tsx

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

// Bootstrap Button varyantları
const buttonVariants = {
  default: "btn btn-primary",
  destructive: "btn btn-danger",
  outline: "btn btn-outline-secondary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-link text-muted",
  link: "btn btn-link",
} as const;

// Bootstrap Button boyutları
const buttonSizes = {
  sm: "btn-sm",
  lg: "btn-lg",
  default: "", // default => normal boyut
} as const;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  asChild?: boolean; // Radix Slot destekli
}

/**
 * Bootstrap Button Component
 * - variant: button tipi
 * - size: button boyutu
 * - asChild: Radix Slot ile farklı element sarma imkanı
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={`btn ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
