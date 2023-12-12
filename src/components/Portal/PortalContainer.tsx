import { cn } from "@/utils/styleUtils";

export const PORTAL_ID = "portal-container";

export type PortalContainerProps = {
  className?: string;
};

export const PortalContainer = ({ className }: PortalContainerProps) => {
  return <div id={PORTAL_ID} className={cn("relative left-0 right-0 top-0 z-10 h-full w-full", className)} />;
};
