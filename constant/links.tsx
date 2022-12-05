import BlackCircle from "public/assets/black-circle.svg";
import Discord from "public/assets/discord.svg";
import Discourse from "public/assets/discourse.svg";
import Github from "public/assets/github.svg";
import SmUpRightArrow from "public/assets/sm-up-right-arrow.svg";
import Twitter from "public/assets/twitter.svg";

export const links = [
  {
    label: "How it works",
    href: "#howItWorks",
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
    label: (
      <>
        Oracle <SmUpRightArrow style={{ marginLeft: "8px" }} />
      </>
    ),
    href: "#",
  },
  {
    label: (
      <>
        Docs <SmUpRightArrow style={{ marginLeft: "8px" }} />
      </>
    ),
    href: "#",
  },
  {
    label: (
      <>
        Projects <SmUpRightArrow style={{ marginLeft: "8px" }} />
      </>
    ),
    href: "#",
  },
];

export const socialLinks = [
  {
    href: "http://discord.umaproject.org",
    Icon: Discord,
  },
  {
    href: "https://twitter.com/UMAprotocol",
    Icon: BlackCircle,
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
