type Props = {
  size?: number;
  thickness?: number;
  color?: string;
};
export function PlusMinus(props: Props) {
  const size = props.size ?? 24;
  const thickness = props.thickness ?? size / 12;
  const color = props.color ?? "currentColor";

  return (
    <span
      className="relative inline-block rounded-full"
      style={{
        width: size,
        minWidth: size,
        height: size,
        minHeight: size,
        borderWidth: thickness,
        borderColor: color,
      }}
    >
      <span
        className="absolute left-[15%] top-[50%] block w-[70%] -translate-y-[50%] rounded-full"
        style={{
          height: thickness,
          backgroundColor: color,
        }}
      ></span>
      <span
        className="absolute left-[50%] top-[15%] block h-[70%] -translate-x-[50%] rounded-full transition-transform group-data-[state=open]:scale-y-0"
        style={{
          width: thickness,
          backgroundColor: color,
        }}
      ></span>
    </span>
  );
}
