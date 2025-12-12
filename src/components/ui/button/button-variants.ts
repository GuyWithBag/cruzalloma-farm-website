import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
   "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
   {
      variants: {
         variant: {
            // Green filled button (Image 1 top, Image 2 top)
            default:
               "bg-primary text-white border-1 border-white hover:bg-primary/85",

            // Red filled for destructive actions
            destructive:
               "bg-red-600 text-white border-1 border-red-700 hover:bg-red-700",

            // Outline with transparent bg (Image 1 bottom, Image 2 bottom)
            outline:
               "bg-transparent text-olive-green-200 border-1 border-olive-green-200 hover:bg-olive-green-500/10",

            // Light neutral filled
            secondary:
               "bg-neutral-200 text-neutral-800 border-1 border-neutral-300 hover:bg-neutral-300",

            // No background, no border
            ghost: "hover:bg-olive-green-500/10 text-olive-green-600",

            link: "text-olive-green-600 underline-offset-4 hover:underline",
         },
         size: {
            default: "px-5 py-2.5 text-base",
            lg: "px-3.5 py-1 sm:px-4.5 text-sm sm:text-base xl:text-[1.125rem]",
            sm: "px-4 py-2 text-sm",
            xs: "px-3 py-1.5 text-xs",
            icon: "size-10",
            "icon-sm": "size-8",
            "icon-lg": "size-12",
         },
         rounded: {
            // Rounded button
            default: "rounded-full",
            // Square button
            square: "rounded-none",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "default",
         rounded: "default",
      },
   }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
