import { Platforms } from "@/constant/pages";
import { useLayoutEffect } from "react";

const platformsColorA = ["windows", "iphone", "ipad"];

export const useSetPlatform = () => {
  useLayoutEffect(() => {
    const ua = window.navigator.userAgent;
    const platform = platformsColorA.some((platform) => ua.toLowerCase().includes(platform))
      ? Platforms.WINDOWS
      : Platforms.MAC;
    const mainElement = document.getElementById("app-root-main");
    if (mainElement) {
      mainElement.setAttribute("data-platform", platform.toLowerCase());
    }
  }, []);
};
