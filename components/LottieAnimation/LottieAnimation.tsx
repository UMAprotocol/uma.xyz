import LottiePlayer from "react-lottie-player/dist/LottiePlayerLight";

interface Props {
  animationData: object;
  play: boolean;
  direction?: 1 | -1;
  loop?: boolean;
}
export function LottieAnimation({ animationData, play, direction = 1, loop = true }: Props) {
  return (
    <LottiePlayer
      animationData={animationData}
      play={play}
      direction={direction}
      loop={loop}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid slice",
      }}
    />
  );
}
