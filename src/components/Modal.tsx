"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { Icon } from "./Icon";

export function useModal() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  function showModal() {
    if (!modalRef.current) return;
    setScrollPosition(window.scrollY);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.documentElement.style.height = "100svh";
    document.body.style.height = "100svh";
    modalRef.current.showModal();
  }

  function closeModal() {
    if (!modalRef.current) return;
    document.documentElement.style.overflow = "initial";
    document.body.style.overflow = "initial";
    document.documentElement.style.height = "initial";
    document.body.style.height = "initial";
    window.scrollTo(0, scrollPosition);
    modalRef.current.close();
  }

  return { modalRef, showModal, closeModal };
}

export type ModalProps = ReturnType<typeof useModal>;

type Props = { children: ReactNode } & ModalProps;

export function Modal({ children, modalRef, showModal, closeModal, ...dialogProps }: Props) {
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
    <dialog ref={modalRef} onClick={onClick} {...dialogProps} className="relative rounded-2xl shadow-xs">
      <button
        onClick={closeModal}
        className="absolute right-0 top-0 z-50 p-2 transition hover:opacity-50"
        aria-label="Close modal"
      >
        <Icon name="x" className="h-6 w-6" />
      </button>
      {children}
    </dialog>
  );
}
