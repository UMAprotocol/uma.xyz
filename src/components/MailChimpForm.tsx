import { SyntheticEvent, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function MailChimpForm() {
  const [value, setValue] = useState("");
  return (
    <MailchimpSubscribe
      url={process.env.NEXT_PUBLIC_MAILCHIMP_URL || ""}
      render={({ subscribe, status, message }) => (
        <>
          <form
            className="flex w-full flex-col items-center justify-end gap-3 lg:flex-row"
            onSubmit={(evt: SyntheticEvent<HTMLFormElement>) => {
              evt.preventDefault();
              // @ts-expect-error Doesn't like the input being taken like this
              subscribe({ EMAIL: evt.target[0].value }); // eslint-disable-line
            }}
          >
            <input
              className="h-12 w-full max-w-[528px] rounded-lg border-2 border-[transparent] bg-white px-4 py-3 text-lg text-grey-200 caret-grey-900 outline-none transition hover:border-grey-500 focus:border-grey-900 xl:max-w-[350px]"
              type="email"
              name="email"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Your Email"
            />

            <button
              className="flex h-12 w-full min-w-fit max-w-[528px] items-center justify-center gap-0.5 whitespace-nowrap rounded-lg bg-red px-[24px] py-2 text-lg text-grey-200 transition hover:opacity-50 lg:w-fit"
              type="submit"
            >
              Sign up
            </button>
          </form>
          {status === "sending" && <div className="text-grey-300">Sending...</div>}
          {status === "error" && (
            <div style={{ color: "var(--red)" }} dangerouslySetInnerHTML={{ __html: message as string }} />
          )}
          {status === "success" && <div style={{ color: "#20a93e" }}>Subscribed!</div>}
        </>
      )}
    />
  );
}
