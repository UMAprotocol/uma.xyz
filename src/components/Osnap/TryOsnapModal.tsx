import { Modal, useModal } from "../Modal";

export function useTryOsnapModal() {
  const modalProps = useModal();

  return modalProps;
}

type Props = ReturnType<typeof useTryOsnapModal>;

export function TryOsnapModal(props: Props) {
  const communicationMethods = {
    discord: true,
    email: false,
    telegram: false,
    other: false,
  };
  return (
    <Modal {...props}>
      <div className="p-6 bg-white">stuff</div>
    </Modal>
  );
}
