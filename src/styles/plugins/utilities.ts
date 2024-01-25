import plugin from "tailwindcss/plugin";

export const truncate = plugin(({ addUtilities }) => {
  addUtilities({
    ".text-truncate": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  });
});
