"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { useEffectOnce } from "usehooks-ts";
import { PORTAL_ID } from "./PortalContainer";

export const Portal = ({ children }: React.PropsWithChildren) => {
  const [mounted, setMounted] = useState(false);

  useEffectOnce(() => {
    setMounted(true);
  });

  if (mounted) {
    return createPortal(children, document.getElementById(PORTAL_ID) ?? document.body);
  }
};
