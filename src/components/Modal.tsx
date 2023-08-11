"use client";

import X from "public/assets/x.svg";
import { useRef, type MouseEvent, type ReactNode } from "react";

export function useModal() {
  const modalRef = useRef<HTMLDialogElement>(null);

  function showModal() {
    if (!modalRef.current) return;
    document.body.classList.add("overflow-hidden");
    modalRef.current.showModal();
  }

  function closeModal() {
    if (!modalRef.current) return;
    document.body.classList.remove("overflow-hidden");
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
        className="absolute right-0 top-0 p-2 transition hover:opacity-50"
        aria-label="Close modal"
      >
        <X />
      </button>
      {children}
    </dialog>
  );
}
