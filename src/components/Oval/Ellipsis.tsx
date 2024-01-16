import { cn } from "@/utils/styleUtils";
import { VariantProps, cva } from "class-variance-authority";

const ellipseVariants = cva(
  "absolute z-0 rounded-[50%]  bg-gradient-to-br via-transparent from-10% to-80% blur-xl from-transparent to-white/5 ",
  {
    variants: {
      size: {
        sm: "w-[60vw] h-[20vw] max-w-[600px] max-h-[200px]",
        md: "w-[100vw] h-[40vw] max-w-[1000px] max-h-[400px]",
        lg: "w-[140vw] h-[50vw] max-w-[1400px] max-h-[500px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type EllipseProps = VariantProps<typeof ellipseVariants> & {
  className?: string;
};

export const Ellipse = ({ className, size }: EllipseProps) => {
  return <span className={cn(ellipseVariants({ size }), className)} />;
};
