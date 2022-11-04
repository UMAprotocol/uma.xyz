import { useMounted } from "hooks";
import Image from "next/image";
import illustration from "public/assets/illustration.png";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

export function HowItWorksWip() {
  const mounted = useMounted();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const wrapperHeight = wrapperRef.current?.clientHeight ?? 0;
  const wrapperWidth = wrapperRef.current?.clientWidth ?? 0;
  const [maxHeight, setMaxHeight] = useState(500);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  useEffect(() => {
    if (!mounted) return;

    setMaxHeight(wrapperHeight);
  }, [mounted, wrapperHeight]);

  useEffect(() => {
    if (inView) {
      setMaxHeight(0);
    }
  }, [inView]);

  return (
    <Wrapper ref={ref}>
      <IllustrationWrapper ref={wrapperRef}>
        <Image src={illustration} alt="" />
        <Mask height={wrapperHeight} width={wrapperWidth} maxHeight={maxHeight} />
      </IllustrationWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const IllustrationWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin-block: 80px;
  margin-left: auto;
`;

interface MaskProps {
  width: number;
  height: number;
  maxHeight: number;
}
const Mask = styled.div.attrs<MaskProps>((props) => ({
  style: {
    width: props.width,
    height: props.height,
    maxHeight: props.maxHeight,
  },
}))<MaskProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  background: black;
  transition: max-height 2s linear;
`;
