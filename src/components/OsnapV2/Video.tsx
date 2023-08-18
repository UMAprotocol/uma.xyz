import Image from "next/image";
import Link from "next/link";
import handshake from "public/assets/handshake.png";
import play from "public/assets/play.png";
import { MouseEventHandler, useState } from "react";
import { Icon } from "../Icon";

export function Video() {
  const [videoSrc, setVideoSrc] = useState("https://www.youtube.com/embed/R97GIW5M_r0?controls=0");
  const [showThumbnail, setShowThumbnail] = useState(true);

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setShowThumbnail(false);
    setVideoSrc(videoSrc + "&autoplay=1");
  };

  return (
    <section className="bg-grey-50 px-4 py-6">
      <h1 className="mb-6 text-center text-4xl font-medium text-grey-500">
        Achieve decentralized governance in <span className="text-primary-500">71 seconds.</span>
      </h1>
      <div className="mx-auto rounded-2xl bg-white p-4 shadow-xl">
        <div className="relative mb-4">
          {showThumbnail && (
            <div
              className="group absolute left-0 top-0 z-10 aspect-video w-full cursor-pointer rounded-2xl"
              onClick={onClick}
            >
              <Image src={handshake} alt="handshake" layout="fill" objectFit="cover" className="rounded-2xl" />
              <Image
                src={play}
                alt="play video"
                className="absolute left-[50%] top-[50%] z-10 aspect-square w-[80px] -translate-x-[50%] -translate-y-[50%] transition-all group-hover:scale-110"
              />
            </div>
          )}
          <div className="relative aspect-video before:absolute before:-inset-1 before:-z-10 before:bg-black before:opacity-75 before:blur-md">
            <iframe
              width="100%"
              height="100%"
              src={videoSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                clipPath: "inset(0% 0% 0% 0% round 16px)",
              }}
            ></iframe>
          </div>
        </div>
        <button className="mx-auto mb-3 block w-full rounded-xl bg-grey-900 px-4 py-3 text-lg font-medium text-white transition-all hover:brightness-200">
          Try oSnap
        </button>
        <Link
          href="https://docs.uma.xyz/developers/osnap/osnap-quick-start"
          className="bg-grey-white group mx-auto grid w-full place-items-center rounded-xl border border-grey-200 px-4 py-3 text-lg font-medium text-grey-600"
        >
          <span className="flex items-center gap-1 transition-all group-hover:gap-[1.5px] group-hover:brightness-150">
            Read Docs <Icon name="external-link" className="inline h-5 w-5" />
          </span>
        </Link>
      </div>
    </section>
  );
}
