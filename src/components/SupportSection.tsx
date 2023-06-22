import { mobileAndUnder, tabletAndUnder } from "@/constant";
import { useLoadSectionRefAndId } from "@/hooks/helpers/useLoadSectionRefAndId";
import { useInView } from "framer-motion";
import NextLink from "next/link";
import UpRightArrowLg from "public/assets/up-right-arrow-lg.svg";
import { useRef } from "react";
import styled from "styled-components";
import { BaseOuterWrapper } from "./Wrappers";

export default function SupportSection() {
  const id = "support";
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: "some" });
  useLoadSectionRefAndId(ref, id);

  return (
    <OuterWrapper id={id} ref={ref}>
      <Background>
        <Video autoPlay loop muted playsInline>
          {inView && (
            <>
              <source src="/assets/uma.xyz.mp4" type="video/mp4" />
              <source src="/assets/uma.xyz.webm" type="video/webm" />
            </>
          )}
        </Video>
        <RearOverlay />
        <FrontOverlay />
      </Background>
      <InnerWrapper>
        <div>
          <TextWrapper>
            <Title>Supported by the Risk Labs Foundation</Title>
            <Subtitle>
              Risk Labs is the foundation and team behind UMA. Risk Labs&apos; mission is to make global markets
              universally fair, accessible, secure and decentralized.
            </Subtitle>
          </TextWrapper>
          <LinksWrapper>
            <AnimatedLink href="https://jobs.lever.co/risklabs" target="_blank">
              <ArrowIconWrapper>
                <ArrowIcon />
              </ArrowIconWrapper>
              <LinkText>Careers</LinkText>
            </AnimatedLink>
            <AnimatedLink href="https://risklabs.foundation" target="_blank">
              <ArrowIconWrapper>
                <ArrowIcon />
              </ArrowIconWrapper>
              <LinkText>About</LinkText>
            </AnimatedLink>
          </LinksWrapper>
        </div>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const Background = styled.div`
  isolation: isolate;
`;

const FrontOverlay = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.85) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  left: 0;
  top: 0;
  width: 60%;
  height: 100%;
  pointer-events: none;
  max-width: calc(var(--max-width) - 40%);
`;

const RearOverlay = styled.div`
  background: linear-gradient(0deg, #f0f0f0 0%, rgba(255, 255, 255, 0.45) 50%, #ffffff 100%);
  max-width: var(--max-width);
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Video = styled.video`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: luminosity;
  pointer-events: none;
  object-fit: cover;
`;

const OuterWrapper = styled(BaseOuterWrapper)`
  background: linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%);
  padding-top: 0;
  padding-bottom: 24px;
  position: relative;
`;

const InnerWrapper = styled.div`
  display: grid;
  align-items: center;
  position: relative;
  pointer-events: all;
  min-height: min(1024px, 80vh);
  max-width: var(--page-width);
  margin-inline: auto;
  z-index: 1;
`;

const Title = styled.h1`
  margin-bottom: 24px;
  font: var(--header-md);
  @media ${mobileAndUnder} {
    font: var(--header-sm);
  }
`;

const TextWrapper = styled.div`
  max-width: 562px;
  font: var(--header-md);
  @media ${mobileAndUnder} {
    max-width: 400px;
  }
`;

const Subtitle = styled.h2`
  font: var(--body-lg);
  margin-bottom: 74px;
  @media ${mobileAndUnder} {
    font: var(--body-md);
  }
`;

const LinksWrapper = styled.div`
  margin-top: 64px;
  display: grid;
  gap: 24px;
  @media ${tabletAndUnder} {
    margin-top: 36px;
  }
`;

const ArrowIconWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1.5px solid var(--grey-200);
  border-radius: 10px;
  transition: border-color var(--animation-duration), background-color var(--animation-duration);
`;

const ArrowIcon = styled(UpRightArrowLg)`
  path {
    transition: stroke var(--animation-duration);
  }
`;

const LinkText = styled.span`
  font: var(--header-sm);
  color: var(--grey-200);
  line-height: 115%;
  transition: color var(--animation-duration);
  @media ${mobileAndUnder} {
    font-size: 32px;
  }
`;

const AnimatedLink = styled(NextLink)`
  display: flex;
  gap: 20px;
  align-items: center;
  text-decoration: none;
  transition: gap var(--animation-duration);

  &:hover {
    gap: 16px;
    ${LinkText} {
      color: var(--red);
    }
    ${ArrowIconWrapper} {
      border-color: var(--red);
      background-color: var(--red);
    }
    ${ArrowIcon} {
      path {
        stroke: var(--white);
      }
    }
  }
`;
