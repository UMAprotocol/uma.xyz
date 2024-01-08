"use client";

import { cn } from "@/utils/styleUtils";
import Spline, { SplineProps } from "@splinetool/react-spline";

export const Animation = ({ className, ...props }: SplineProps) => {
  return <Spline className={cn("pointer-events-none", className)} {...props} />;
};
