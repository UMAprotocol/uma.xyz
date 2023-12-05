import { cn } from "@/utils/styleUtils";
import { Icon } from "../Icon";
import Link, { LinkProps } from "next/link";

export type ExternalLink = React.PropsWithChildren<LinkProps> & {
  className?: string;
};

export const ExternalLink = ({ children, className, ...props }: ExternalLink) => {
  return (
    <Link
      target="_blank"
      className={cn(
        "text-md group flex items-center gap-3 whitespace-nowrap rounded-[10px] bg-white/5 px-[1em] py-[0.67em] uppercase shadow-[inset_0_1px_4px_0px_rgba(255,255,255,0.10),0_8px_23px_0px_rgba(0,0,0,0.15)]",
        className,
      )}
      {...props}
    >
      <Icon
        name="external-link"
        className="h-[1em] w-[1em] text-white/50  transition-colors  group-hover:text-white "
      />
      <span className="text-gradient-oval font-medium leading-6 transition-colors  group-hover:text-white">
        {children}
      </span>
    </Link>
  );
};
