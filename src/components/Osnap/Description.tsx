import Image from "next/image";
import umaPlusSnapshot from "public/assets/uma-plus-snapshot.png";

export function Description() {
  return (
    <section className="bg-white-200 p-8 md:p-[144px]">
      <div className="mx-auto mb-10 h-[50px] w-[278px] md:h-[64px] md:w-[356px]">
        <Image src={umaPlusSnapshot} alt="UMA + Snapshot = oSnap" />
      </div>
      <div className="mx-auto max-w-[790px]">
        <p className="mb-3 text-center text-3xl text-grey-600 md:mb-10 md:text-4xl">
          <span className="text-red">oSnap</span> is an innovative tool that seamlessly integrates with Snapshot,
          enabling direct on-chain execution of DAO governance decisions.
        </p>
        <p className="text-center text-3xl text-grey-600 md:text-4xl">
          It streamlines and decentralizes the governance process, eliminating the need for privileged signers.
        </p>
      </div>
    </section>
  );
}
