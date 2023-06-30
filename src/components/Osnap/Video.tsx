export function Video() {
  return (
    <section className="bg-white p-5">
      <div className="relative aspect-video before:absolute before:-inset-1 before:-z-10 before:bg-black before:opacity-75 before:blur-md">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/R97GIW5M_r0?controls=0"
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
    </section>
  );
}
