type DividerProps = {
  className?: string;
};

export const Divider = ({ className }: DividerProps) => {
  return <span className={`h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent ${className}`} />;
};
