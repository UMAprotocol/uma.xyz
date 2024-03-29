"use client";

import { useRef, useState, type MouseEvent, useEffect, useCallback } from "react";
import { Icon } from "./Icon";
import { cn } from "@/utils/styleUtils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useModal(options?: {
  useQueryParams?: {
    key: string;
    value: string;
  };
}) {
  const modalRef = useRef<HTMLDialogElement & { isOpen: boolean }>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryParamsSet = options?.useQueryParams
    ? searchParams?.get(options.useQueryParams.key) === options.useQueryParams.value
    : false;

  const setIfParam = useCallback(() => {
    if (options?.useQueryParams) {
      const { key, value } = options.useQueryParams;
      const newSearchParams = new URLSearchParams(searchParams ?? "");
      newSearchParams.set(key, value);
      router.push(`${pathname}/?${newSearchParams.toString()}`, { scroll: false });
    }
  }, [options?.useQueryParams, pathname, router, searchParams]);

  const removeIfParam = useCallback(() => {
    if (options?.useQueryParams) {
      const { key } = options.useQueryParams;
      const newSearchParams = new URLSearchParams(searchParams ?? "");
      newSearchParams.delete(key);
      router.push(`${pathname}/?${newSearchParams.toString()}`, { scroll: false });
    }
  }, [options?.useQueryParams, pathname, router, searchParams]);

  const showModal = useCallback(() => {
    if (!modalRef.current || modalRef.current.isOpen) return;
    setScrollPosition(window.scrollY);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.documentElement.style.height = "100svh";
    document.body.style.height = "100svh";
    modalRef.current.showModal();
    modalRef.current.isOpen = true;
    setIfParam();
  }, [setIfParam]);

  const closeModal = useCallback(() => {
    if (!modalRef.current || !modalRef.current.isOpen) return;
    document.documentElement.style.overflow = "initial";
    document.body.style.overflow = "initial";
    document.documentElement.style.height = "initial";
    document.body.style.height = "initial";
    const scrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "unset";
    modalRef.current.close();
    window.scrollTo(0, scrollPosition);
    document.documentElement.style.scrollBehavior = scrollBehavior;
    modalRef.current.isOpen = false;
    removeIfParam();
  }, [removeIfParam, scrollPosition]);

  // open modal on page load
  useEffect(() => {
    if (queryParamsSet && !modalRef.current?.isOpen) {
      showModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParamsSet]);

  // listen for keyboard-controlled closes from dialog element
  useEffect(() => {
    const dialog = modalRef.current;
    if (dialog) {
      dialog.addEventListener("close", closeModal);
    }

    return () => {
      if (dialog) {
        dialog.removeEventListener("close", closeModal);
      }
    };
  }, [closeModal]);

  return { modalRef, showModal, closeModal };
}

export type ModalProps = ReturnType<typeof useModal>;

type Props = React.ComponentPropsWithoutRef<"dialog"> & ModalProps;

export function Modal({ children, modalRef, className, showModal, closeModal, ...dialogProps }: Props) {
  function onClick(event: MouseEvent) {
    if (!modalRef.current) return;
    if (isClickOnBackdrop(event)) closeModal();
  }

  function isClickOnBackdrop(event: MouseEvent) {
    if (!modalRef.current) return false;
    if (event.target !== modalRef.current) return false;
    const boundingRect = modalRef.current.getBoundingClientRect();
    return !(
      event.clientX < boundingRect.right &&
      event.clientX > boundingRect.left &&
      event.clientY > boundingRect.top &&
      event.clientY < boundingRect.bottom
    );
  }

  return (
    <dialog
      ref={modalRef}
      onClick={onClick}
      {...dialogProps}
      className={cn("relative rounded-2xl shadow-xs", className)}
    >
      <button
        onClick={closeModal}
        className="absolute right-0 top-0 z-50 p-2 transition hover:opacity-50"
        aria-label="Close modal"
      >
        <Icon name="x" className="h-6 w-6 text-[--close-icon-color]" />
      </button>
      {children}
    </dialog>
  );
}
