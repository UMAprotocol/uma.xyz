type Props = {
  name: string;
  className?: string;
};
export function Icon({ name, className }: Props) {
  return (
    <svg className={`h-[1em] w-[1em] ${className}`}>
      <use href={`assets/icons.svg#${name}`} />
    </svg>
  );
}
