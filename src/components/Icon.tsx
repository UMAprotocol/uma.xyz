type Props = React.ComponentPropsWithoutRef<"svg"> & {
  name: string;
  className?: string;
};
export function Icon({ name, className, ...props }: Props) {
  return (
    <svg className={`h-[1em] w-[1em] ${className}`} {...props}>
      <use href={`assets/icons.svg#${name}`} />
    </svg>
  );
}
