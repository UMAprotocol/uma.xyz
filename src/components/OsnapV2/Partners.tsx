import { Icon } from "../Icon";

const partners = [
  {
    label: "Connext",
    icon: "connext",
  },
  {
    label: "Cow Swap",
    icon: "cow-swap",
  },
  {
    label: "Premia",
    icon: "premia",
  },
  {
    label: "Shape Shift",
    icon: "shape-shift",
  },
  {
    label: "Across",
    icon: "across-with-text",
  },
];

export const Partners = () => {
  return (
    <section className="px-page-padding-2 mx-auto flex w-full max-w-page-width flex-col items-center gap-6 bg-white py-8">
      <h2 className="text-gray-600 text-md xl:text-lg">Securing Crypto&apos;s Finest</h2>
      <div className="flex w-full flex-row flex-wrap gap-6">
        {partners.map((partner) => (
          <Icon
            className="bg-gray-600 max-h-10 min-w-[160px] flex-1 text-grey-900"
            aria-label={`Corporate logo for ${partner.label}.`}
            key={partner.label}
            name={partner.icon}
          />
        ))}
      </div>
    </section>
  );
};
