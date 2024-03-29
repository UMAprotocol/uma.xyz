"use client";

import Image from "next/image";
import fancyOsnapLogo from "public/assets/fancy-osnap-logo.png";
import { ContactDetailsInput } from "../ContactDetailsInput";
import { Icon } from "../Icon";
import { LoadingSpinner } from "../LoadingSpinner";
import { Modal } from "../Modal";
import { RadioGroup } from "../RadioGroup";
import { TextInput } from "../TextInput";
import { useLeadCaptureModal, MODALS, useLeadCaptureForm } from "@/hooks/leadCapture/useLeadCaptureModal";
import { AirtableRequestBody } from "@/app/api/airtable/utils";
import { PropsWithChildren } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Checkbox } from "../ui/checkbox";
import { mailchimpSignup } from "@/utils/mailchimp";

export function useTryOsnapModal() {
  return useLeadCaptureModal(MODALS["try-osnap"]);
}

export function TryOsnapModalTrigger({ className, children }: PropsWithChildren<{ className?: string }>) {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick() {
    if (pathname) {
      router.push(`${pathname}?modal=${MODALS["try-osnap"]}`, { scroll: false });
    }
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

export function TryOsnapModal() {
  const {
    formState,
    setFormState,
    radioGroupProps,
    nameInputProps,
    organizationInputProps,
    contactDetailsInputProps,
    fields,
    isFormValid,
    signupForNewsletter,
    setSignupForNewsletter,
  } = useLeadCaptureForm();
  const modalProps = useTryOsnapModal();

  async function onSubmit() {
    if (!isFormValid) return;

    setFormState("busy");
    const body: AirtableRequestBody = { ...fields, integration: "osnap" };

    const airtableFetch = fetch("/api/airtable", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const promises: Promise<unknown>[] = [airtableFetch];

    if (fields.communicationChannel === "email" && signupForNewsletter === true) {
      promises.push(mailchimpSignup(fields.contactDetails));
    }

    const response = await Promise.allSettled(promises);

    if (!response.every((res) => res.status === "fulfilled")) {
      setFormState("error");
      setTimeout(() => {
        setFormState("idle");
      }, 3000);
      return;
    }

    setFormState("success");
  }

  const idleSubmitButtonContent = "Submit";

  const busyButtonContent = (
    <span className="flex items-center gap-1">
      Submitting... <LoadingSpinner variant="white" width={12} height={12} />
    </span>
  );

  const successSubmitButtonContent = (
    <span className="flex items-center gap-1">
      Submitted! <Icon name="check-circle" className="h-3 w-3" />
    </span>
  );

  const errorSubmitButtonContent = (
    <span className="flex items-center gap-1">
      Failed <Icon name="info" className="h-3 w-3" />
    </span>
  );

  return (
    <Modal {...modalProps}>
      <div
        id="try-osnap-modal"
        className="relative h-16"
        style={{
          backgroundImage: "url(/assets/handshake.png)",
          backgroundSize: "120%",
          backgroundPosition: "60% 50%",
        }}
      >
        <div className="absolute isolate h-full w-full bg-gradient-to-b from-white to-grey-50 opacity-60"></div>
        <Image
          src={fancyOsnapLogo}
          alt="Fancy Osnap Logo"
          className="absolute -bottom-[30%] left-[50%] h-14 w-14 translate-x-[-50%] object-contain"
        />
      </div>
      <div className="w-[min(80vw,540px)] bg-white p-6">
        <h1 className="mb-4 text-center text-4xl font-medium text-grey-950">Dedicated DAO support</h1>
        <p className="mb-6 text-center text-grey-700">
          Our DevRel team offers dedicated support to every DAO that integrates oSnap. Complete the form below and
          we&apos;ll reach out ASAP
        </p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            void onSubmit();
          }}
        >
          <div className="mb-6 grid gap-x-2 gap-y-3 sm:grid-cols-2">
            <TextInput theme="osnap" {...nameInputProps} />
            <TextInput theme="osnap" {...organizationInputProps} />
          </div>
          <RadioGroup theme="osnap" {...radioGroupProps} />
          <div className="my-6">
            <ContactDetailsInput theme="osnap" {...contactDetailsInputProps} />
            {fields.communicationChannel === "email" && (
              <label
                className="mt-2 flex w-fit cursor-pointer items-center gap-1 truncate p-1"
                htmlFor="signup-checkbox"
              >
                <Checkbox
                  id="signup-checkbox"
                  checked={signupForNewsletter}
                  onCheckedChange={(e) => {
                    setSignupForNewsletter(e);
                  }}
                />
                Sign up to our newsletter.
              </label>
            )}
          </div>
          <button
            disabled={!isFormValid}
            type="submit"
            className="grid h-11 w-full place-items-center rounded-lg bg-grey-900 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {formState === "idle" && idleSubmitButtonContent}
            {formState === "busy" && busyButtonContent}
            {formState === "success" && successSubmitButtonContent}
            {formState === "error" && errorSubmitButtonContent}
          </button>
        </form>
      </div>
    </Modal>
  );
}
