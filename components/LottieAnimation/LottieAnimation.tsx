import LottiePlayer from "react-lottie-player/dist/LottiePlayerLight";

interface Props {
  animationData: object | undefined;
  play: boolean;
  direction?: 1 | -1;
  loop?: boolean;
}
export default function LottieAnimation({ animationData, play, direction = 1, loop = true }: Props) {
  if (!animationData) return null;

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
