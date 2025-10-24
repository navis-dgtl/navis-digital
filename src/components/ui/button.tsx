import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "text-white",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105",
        outline: "text-white hover:scale-105",
        secondary: "text-white hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const Comp = asChild ? Slot : "button";
    
    // Default variant (main button)
    const defaultStyle = {
      background: '#1D1D1D',
      border: '1px solid transparent',
      backgroundImage: 'linear-gradient(#1D1D1D, #1D1D1D), linear-gradient(135deg, #99E9F2, #A250FF)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      boxShadow: isHovered 
        ? '0 0 40px rgba(162, 80, 255, 0.4), 0 0 80px rgba(153, 233, 242, 0.2)'
        : '0 2px 10px rgba(162, 80, 255, 0.15)',
    };
    
    // Outline/Secondary variant
    const secondaryStyle = {
      background: '#1D1D1D',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: isHovered 
        ? '0 0 25px rgba(255, 255, 255, 0.15)'
        : '0 2px 8px rgba(0, 0, 0, 0.3)',
    };
    
    const getButtonStyle = () => {
      if (variant === 'outline' || variant === 'secondary') {
        return secondaryStyle;
      }
      if (variant === 'default') {
        return defaultStyle;
      }
      return {};
    };
    
    return (
      <Comp 
        className={cn(buttonVariants({ variant, size, className }), "duration-300")} 
        ref={ref} 
        style={getButtonStyle()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props} 
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
