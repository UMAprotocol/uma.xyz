import { ExternalLink } from "../ExternalLink";

export const IntegrateOvalSuccessContent = () => {
  return (
    <div className="max-w-[470px] p-10">
      <h2 className="text-gradient-oval pb-4 text-center text-5xl font-medium">We&apos;ll reach out soon</h2>
      <p className="text-gradient-oval mb-6 text-center">
        In the meantime, you can fill most knowledge gaps by reading through our official Oval documentation.
      </p>
      <ExternalLink href="https://docs.oval.xyz/" className="mx-auto w-fit">
        learn more in docs
      </ExternalLink>
    </div>
  );
};
