import Image, { StaticImageData } from "next/image";
import placeholderProfilePicture from "public/assets/placeholder-profile-picture.png";

type TTweet = {
  author: string;
  handle: string;
  href: string;
  date: string;
  content: string;
  img: StaticImageData;
};

export function Tweets() {
  const column1: TTweet[] = [
    {
      author: "Some Guy",
      handle: "@someguy",
      href: "https://twitter.com/UMAprotocol/status/1689698166520823808",
      date: "21 Aug",
      content: "Feugiat lorem dictumst nunc euismod auctor est. Tempus pellentesque elit nulla quam molestie euismod.",
      img: placeholderProfilePicture,
    },
    {
      author: "Some Guy",
      handle: "@someguy",
      href: "https://twitter.com/UMAprotocol/status/1689698166520823808",
      date: "21 Aug",
      content: "Feugiat lorem dictumst nunc euismod auctor est. Tempus pellentesque elit nulla quam molestie euismod.",
      img: placeholderProfilePicture,
    },
    {
      author: "Some Guy",
      handle: "@someguy",
      href: "https://twitter.com/UMAprotocol/status/1689698166520823808",
      date: "21 Aug",
      content: "Feugiat lorem dictumst nunc euismod auctor est. Tempus pellentesque elit nulla quam molestie euismod.",
      img: placeholderProfilePicture,
    },
  ];

  const column2: TTweet[] = [
    {
      author: "Some Guy",
      handle: "@someguy",
      href: "https://twitter.com/UMAprotocol/status/1689698166520823808",
      date: "21 Aug",
      content: "Feugiat lorem dictumst nunc euismod auctor est. Tempus pellentesque elit nulla quam molestie euismod.",
      img: placeholderProfilePicture,
    },
    {
      author: "Some Guy",
      handle: "@someguy",
      href: "https://twitter.com/UMAprotocol/status/1689698166520823808",
      date: "21 Aug",
      content: "Feugiat lorem dictumst nunc euismod auctor est. Tempus pellentesque elit nulla quam molestie euismod.",
      img: placeholderProfilePicture,
    },
    {
      author: "Some Guy",
      handle: "@someguy",
      href: "https://twitter.com/UMAprotocol/status/1689698166520823808",
      date: "21 Aug",
      content: "Feugiat lorem dictumst nunc euismod auctor est. Tempus pellentesque elit nulla quam molestie euismod.",
      img: placeholderProfilePicture,
    },
  ];

  const column3: TTweet[] = [
    {
      author: "Some Guy",
      handle: "@someguy",
      href: "https://twitter.com/UMAprotocol/status/1689698166520823808",
      date: "21 Aug",
      content: "Feugiat lorem dictumst nunc euismod auctor est. Tempus pellentesque elit nulla quam molestie euismod.",
      img: placeholderProfilePicture,
    },
    {
      author: "Some Guy",
      handle: "@someguy",
      href: "https://twitter.com/UMAprotocol/status/1689698166520823808",
      date: "21 Aug",
      content: "Feugiat lorem dictumst nunc euismod auctor est. Tempus pellentesque elit nulla quam molestie euismod.",
      img: placeholderProfilePicture,
    },
    {
      author: "Some Guy",
      handle: "@someguy",
      href: "https://twitter.com/UMAprotocol/status/1689698166520823808",
      date: "21 Aug",
      content: "Feugiat lorem dictumst nunc euismod auctor est. Tempus pellentesque elit nulla quam molestie euismod.",
      img: placeholderProfilePicture,
    },
  ];

  return (
    <section className="relative bg-grey-50 px-4 py-8 sm:px-8 sm:py-12 md:p-16 lg:px-[116px]">
      <h1 className="mx-auto mb-8 max-w-[800px] text-center text-4xl text-grey-500 md:text-6xl">
        Anyone can claim they have a good product, but ultimately{" "}
        <span className="text-primary-500">the users decide.</span>
      </h1>
      <div className="mx-auto grid max-w-[1218px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <ul>
          {column1.map((tweet) => (
            <li key={tweet.href}>
              <Tweet {...tweet} />
            </li>
          ))}
        </ul>
        <ul className="hidden sm:block">
          {column2.map((tweet) => (
            <li key={tweet.href}>
              <Tweet {...tweet} />
            </li>
          ))}
        </ul>
        <ul className="hidden lg:block">
          {column3.map((tweet) => (
            <li key={tweet.href}>
              <Tweet {...tweet} />
            </li>
          ))}
        </ul>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pb-8 pt-48"></div>
    </section>
  );
}

function Tweet(props: TTweet) {
  return (
    <figure className="relative mb-3 flex gap-4 rounded-2xl p-4 shadow-xl sm:p-6 md:p-8">
      <Image
        src={props.img}
        alt="X (formerly Twitter) profile picture"
        className="aspect-square h-10 w-10 flex-none rounded-full object-cover sm:h-12 sm:w-12 lg:h-14 lg:w-14"
      />
      <figcaption className="flex-auto">
        <span>{props.author}</span>{" "}
        <a href={props.href} className="text-grey-500">
          <span className="absolute inset-0"></span>
          <span>{props.handle}</span> · <span className="whitespace-nowrap">{props.date}</span>
        </a>
        <blockquote>{props.content}</blockquote>
      </figcaption>
    </figure>
  );
}
