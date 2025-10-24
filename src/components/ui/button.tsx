import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "text-white transform hover:scale-105 duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 transform hover:scale-105 duration-300",
        outline: "text-white transform hover:scale-105 duration-300",
        secondary: "text-white transform hover:scale-105 duration-300",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground transform hover:scale-105 duration-300",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4 py-2 text-sm",
        lg: "h-12 rounded-xl px-12 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const Comp = asChild ? Slot : "button";

    // Primary button with gradient border (cyan to purple)
    const defaultStyle = disabled
      ? {
          background: "#1D1D1D",
          border: "1px solid rgba(162, 80, 255, 0.2)",
        }
      : {
          background: "#1D1D1D",
          border: "1px solid transparent",
          backgroundImage: "linear-gradient(#1D1D1D, #1D1D1D), linear-gradient(135deg, #99E9F2, #A250FF)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          boxShadow: isHovered
            ? "0 0 40px rgba(162, 80, 255, 0.4), 0 0 80px rgba(153, 233, 242, 0.2)"
            : "0 2px 10px rgba(162, 80, 255, 0.15)",
        };

    // Secondary/Outline button (white border, simple)
    const secondaryStyle = disabled
      ? {
          background: "#1D1D1D",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }
      : {
          background: "#1D1D1D",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: isHovered ? "0 0 25px rgba(255, 255, 255, 0.15)" : "0 2px 8px rgba(0, 0, 0, 0.3)",
        };

    const getButtonStyle = () => {
      // Ghost and link variants use no custom styles
      if (variant === "ghost" || variant === "link") {
        return {};
      }
      // Destructive uses Tailwind classes
      if (variant === "destructive") {
        return {};
      }
      // Outline and secondary use white border
      if (variant === "outline" || variant === "secondary") {
        return secondaryStyle;
      }
      // Default to primary gradient button
      return defaultStyle;
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        style={getButtonStyle()}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => !disabled && setIsHovered(false)}
        disabled={disabled}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
