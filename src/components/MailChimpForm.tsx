import { laptopAndUnder, mobileAndUnder, tabletAndUnder } from "@/constant";
import dynamic from "next/dynamic";
import { SyntheticEvent, useState } from "react";
import styled from "styled-components";

const MailchimpSubscribe = dynamic(() => import("react-mailchimp-subscribe"));

export default function MailChimpForm() {
  const [value, setValue] = useState("");
  return (
    <MailchimpSubscribe
      url={process.env.NEXT_PUBLIC_MAILCHIMP_URL || ""}
      render={({ subscribe, status, message }) => (
        <>
          <Form
            onSubmit={(evt: SyntheticEvent<HTMLFormElement>) => {
              evt.preventDefault();
              // @ts-expect-error Doesn't like the input being taken like this
              subscribe({ EMAIL: evt.target[0].value }); // eslint-disable-line
            }}
          >
            <Input
              type="email"
              name="email"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Your Email"
            />

            <SubmitButton type="submit">Sign up</SubmitButton>
          </Form>
          {status === "sending" && <StatusMessage>Sending...</StatusMessage>}
          {status === "error" && (
            <StatusMessage style={{ color: "var(--red)" }} dangerouslySetInnerHTML={{ __html: message as string }} />
          )}
          {status === "success" && <StatusMessage style={{ color: "#20a93e" }}>Subscribed!</StatusMessage>}
        </>
      )}
    />
  );
}

const Form = styled.form`
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: flex-end;

  @media ${tabletAndUnder} {
    justify-content: start;
  }

  @media ${mobileAndUnder} {
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  height: 48px;
  width: 100%;
  max-width: 350px;
  padding-inline: 16px;
  padding-block: 12px;
  background: var(--white);
  color: var(--grey-200);
  outline: none;
  font: var(--body-md);
  caret-color: var(--grey-100);
  border: 2px solid transparent;
  border-radius: 8px;
  transition: border-color var(--animation-duration);
  &:hover {
    border: 2px solid var(--grey-500);
  }
  &:focus {
    border: 2px solid var(--grey-100);
  }
  @media ${laptopAndUnder} {
    max-width: 528px;
  }
  @media ${mobileAndUnder} {
    max-width: 100%;
  }
`;

const SubmitButton = styled.button`
  height: 48px;
  min-width: fit-content;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px 12px;
  gap: 2px;
  background: var(--red);
  border-radius: 8px;
  color: var(--grey-800);
  font: var(--body-md);
  transition: opacity var(--animation-duration);
  &:hover {
    opacity: 0.5;
  }
  @media ${mobileAndUnder} {
    width: 100%;
  }
`;

const StatusMessage = styled.div`
  font: var(--body-sm);
  color: var(--grey-300);
`;
