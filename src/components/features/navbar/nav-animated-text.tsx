import { cn } from "@/lib/utils/utils";

interface NavAnimatedTextProps {
   children: React.ReactNode;
   isActive?: boolean;
   lineColor?: string;
}

export default function NavAnimatedText({
   children,
   isActive = false,
   lineColor = "bg-white",
}: NavAnimatedTextProps) {
   return (
      <span className="relative inline-block w-fit group">
         {children}
         <span
            className={cn(
               "absolute left-0 bottom-[-1px] h-[2px] w-full origin-center transition-transform duration-300 ease-out",
               lineColor,
               isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            )}
         />
      </span>
   );
}
