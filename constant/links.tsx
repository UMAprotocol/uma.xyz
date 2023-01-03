import Discord from "public/assets/discord.svg";
import Discourse from "public/assets/discourse.svg";
import Message from "public/assets/message.svg";
import Github from "public/assets/github.svg";
import Twitter from "public/assets/twitter.svg";

export const links = [
  {
    label: "How it works",
    href: "#how-it-works",
  },
  {
    label: "For Voters",
    href: "#voter",
  },
  {
    label: "For Builders",
    href: "#builder",
  },
  {
    label: "Oracle",
    href: "https://oracle.umaproject.org/",
  },
  {
    label: "Docs",
    href: "https://docs.umaproject.org/",
  },
  {
    label: "Projects",
    href: "https://projects.umaproject.org/",
  },
];

export const socialLinks = [
  {
    href: "http://discord.umaproject.org",
    Icon: Discord,
  },
  {
    href: "mailto:hello@umaproject.org",
    Icon: Message,
  },
  {
    href: "https://twitter.com/UMAprotocol",
    Icon: Twitter,
  },
  {
    href: "https://discourse.umaproject.org/",
    Icon: Discourse,
  },
  {
    href: "https://github.com/UMAprotocol",
    Icon: Github,
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
      href: "https://optimistic-oracle-dapp.vercel.app/",
    },
    {
      label: "Docs",
      href: "https://docs.umaproject.org/",
    },
    {
      label: "Projects",
      href: "https://projects.umaproject.org/",
    },
  ],
};
