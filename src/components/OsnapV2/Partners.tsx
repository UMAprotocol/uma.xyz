import { Icon } from "../Icon";
import NextLink from "next/link";

const partners = [
  {
    label: "Connext",
    icon: "connext",
    href: "https://www.connext.network/",
  },
  {
    label: "Cow Swap",
    icon: "cow-swap",
    href: "https://cow.fi/",
  },
  {
    label: "Premia",
    icon: "premia",
    href: "https://premia.blue/",
  },
  {
    label: "Shape Shift",
    icon: "shape-shift",
    href: "https://shapeshift.com/",
  },
  {
    label: "Across",
    icon: "across-with-text",
    href: "https://across.to/",
  },
];

export const Partners = () => {
  return (
    <section className="px-page-padding-2 mx-auto flex w-full max-w-page-width flex-col items-center gap-6 bg-white py-8">
      <h2 className="text-gray-600 text-md xl:text-lg">Securing Crypto&apos;s Finest</h2>
      <div className="flex w-full flex-row flex-wrap gap-6">
        {partners.map((partner) => (
          <NextLink key={partner.label} href={partner.href} target="_blank" className="max-h-10 min-w-[160px] flex-1">
            <Icon
              className="h-full w-full text-black"
              aria-label={`Corporate logo for ${partner.label}.`}
              name={partner.icon}
            />
          </NextLink>
        ))}
      </div>
    </section>
  );
};
