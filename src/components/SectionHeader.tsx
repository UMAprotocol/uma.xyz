import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

type SectionHeaderProps = {
  title: ReactNode;
  header: ReactNode;
  constrainWidth?: boolean;
  hasCircleFilter?: boolean;
};

/**
 * Use a `<strong>` tag to add red emphasis to text in the title
 */
export function SectionHeader({ title, header, constrainWidth, hasCircleFilter = true }: SectionHeaderProps) {
  return (
    <div className="relative">
      <motion.h1
        className="border-b border-grey-400 pb-3 text-lg md:pb-4 md:text-4xl [&>strong]:font-normal [&>strong]:text-red"
        initial={{ opacity: 0.1, rotate: "-2deg" }}
        whileInView={{ opacity: 1, rotate: "0deg" }}
        viewport={{ once: true, amount: "all" }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>
      <motion.h2
        className="mb-10 mt-6 w-full text-sm-fluid md:mb-16 md:w-[720px] md:text-md-fluid lg:mb-[128px] lg:mt-12 lg:w-[1020px] lg:text-lg-fluid xl:mb-[128px] xl:mt-12"
        initial={{ opacity: 0.1, rotate: "1deg" }}
        whileInView={{ opacity: 1, rotate: "0deg" }}
        viewport={{ once: true, amount: "all" }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: constrainWidth ? "max(70%, 720px)" : "unset",
        }}
      >
        {header}
        {hasCircleFilter && <CircleFilter />}
      </motion.h2>
    </div>
  );
}

function CircleFilter() {
  const [showCircle, setShowCircle] = useState(false);
  const [{ x, y }, setMousePosition] = useState({ x: 0, y: 0 });
  const radius = 100;
  const diameter = radius * 2;

  return (
    <div
      className="absolute left-0 top-0 h-full w-full overflow-hidden"
      onMouseEnter={() => {
        setShowCircle(true);
      }}
      onMouseLeave={() => {
        setShowCircle(false);
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      <div
        className="pointer-events-none absolute aspect-square rounded-full transition-opacity duration-300"
        style={{
          height: `${diameter}px`,
          opacity: showCircle ? 1 : 0,
          top: (y - radius).toFixed() + "px",
          left: (x - radius).toFixed() + "px",
          backdropFilter: "saturate(2500%) brightness(433%) hue-rotate(-296deg)",
        }}
      />
    </div>
  );
}
