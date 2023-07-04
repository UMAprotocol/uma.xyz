import Discord from "public/assets/discord.svg";
import Discourse from "public/assets/discourse.svg";
import Github from "public/assets/github.svg";
import Medium from "public/assets/medium.svg";
import Twitter from "public/assets/twitter.svg";

export const homePageLinks = [
  {
    label: "How it works",
    href: "/#how-it-works",
  },
  {
    label: "For Voters",
    href: "/#voter",
  },
  {
    label: "For Builders",
    href: "/#builder",
  },
  {
    label: "oSnap",
    href: "/#osnap",
  },
  {
    label: "Docs",
    href: "https://docs.uma.xyz/",
  },
];

export const osnapPageLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Try oSnap",
    href: "https://docs.uma.xyz/developers/osnap/osnap-quick-start",
  },
  {
    label: "Docs",
    href: "https://docs.uma.xyz/",
  },
];

export const socialLinks = [
  {
    href: "http://discord.uma.xyz",
    Icon: Discord,
    label: "Discord",
  },
  {
    href: "https://medium.com/uma-project",
    Icon: Medium,
    label: "Medium",
  },
  {
    href: "https://twitter.com/UMAprotocol",
    Icon: Twitter,
    label: "Twitter",
  },
  {
    href: "http://discourse.uma.xyz",
    Icon: Discourse,
    label: "Discourse",
  },
  {
    href: "https://github.com/UMAprotocol",
    Icon: Github,
    label: "Github",
  },
];

export const footerLinks = {
  internal: [
    {
      label: "How it works",
      href: "#how-it-works",
    },
    {
      label: "For voters",
      href: "#voter",
    },
    {
      label: "For builders",
      href: "#builder",
    },
  ],
  external: [
    {
      label: "Oracle",
      href: "https://oracle.uma.xyz/",
    },
    {
      label: "Docs",
      href: "https://docs.uma.xyz/",
    },
    {
      label: "Projects",
      href: "https://projects.uma.xyz/",
    },
  ],
};
