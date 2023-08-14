import { addOpacityToColor } from "@/utils";
import type { ComponentPropsWithoutRef } from "react";
import { Oval } from "react-loader-spinner";

type OvalProps = ComponentPropsWithoutRef<typeof Oval>;

type Props = OvalProps & {
  variant?: "red" | "black" | "white";
};
export function LoadingSpinner({
  variant = "red",
  width = 26,
  height = 26,
  strokeWidth = 4,
  color,
  secondaryColor,
  ...delegated
}: Props) {
  const redPrimaryColor = "var(--primary-500)";
  const blackPrimaryColor = "var(--grey-900)";
  const whitePrimaryColor = "var(--white)";
  const redSecondaryColor = addOpacityToColor(redPrimaryColor, 0.5);
  const blackSecondaryColor = addOpacityToColor(blackPrimaryColor, 0.5);
  const whiteSecondaryColor = addOpacityToColor(whitePrimaryColor, 0.5);

  const _color = color
    ? color
    : variant === "white"
    ? whitePrimaryColor
    : variant === "red"
    ? redPrimaryColor
    : blackPrimaryColor;
  const _secondaryColor = secondaryColor
    ? secondaryColor
    : variant === "white"
    ? whiteSecondaryColor
    : variant === "red"
    ? redSecondaryColor
    : blackSecondaryColor;
  return (
    <Oval
      width={width}
      height={height}
      strokeWidth={strokeWidth}
      color={_color}
      secondaryColor={_secondaryColor}
      {...delegated}
    />
  );
}
