// components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-dark-red text-white hover:bg-dark-red/90",
        outline:
          "border bg-white hover:bg-light-gray hover:text-charcoal border-medium-gray",
        secondary: "bg-light-gray text-charcoal hover:bg-medium-gray",
        ghost: "hover:bg-light-gray hover:text-charcoal",
        link: "text-dark-red underline-offset-4 hover:underline",
        cta: "bg-white text-black rounded-full font-medium hover:bg-[#171515] hover:text-white active:bg-[#252222] active:text-white disabled:bg-[#C9C1C1] disabled:text-white transition-colors duration-300",
        "cta-light":
          "bg-[#171515] text-white rounded-full font-medium hover:bg-white hover:text-black active:bg-[#252222] active:text-white disabled:bg-[#C9C1C1] disabled:text-white transition-colors duration-300",
        "cta-gradient":
          "text-white cursor-pointer rounded-full font-medium disabled:text-white transition-all duration-300 [background:linear-gradient(266.49deg,#F99639_-15.12%,#D80A00_58.77%,#A01800_118.54%)] hover:[background:linear-gradient(266.49deg,#B50F0F_0%,#B50F0F_100%)] active:[background:linear-gradient(266.49deg,#171515_0%,#171515_100%)] disabled:[background:#C9C1C1!important]",
        dark: "bg-charcoal text-white hover:bg-black",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3",
        lg: "h-10 rounded-md px-6",
        cta: "h-[54px] w-[251px] text-[18px] gap-1",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  style,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={style}
      {...props}
    />
  );
}

export { Button, buttonVariants };
