import { useState, useEffect } from "react";

// This hook tracks the percentage of the element that has been scrolled past
// For the Tracker in HowItWorks
export default function useTrackRefCrossed(
  trackRef: React.MutableRefObject<HTMLDivElement | null>,
  observerTrack: IntersectionObserverEntry | undefined,
  offset: number,
  currentScrollPosition: number
) {
  const [percentCrossed, setPercentCrossed] = useState(0);

  useEffect(() => {
    if (trackRef.current && observerTrack) {
      setPercentCrossed(
        calculatePercentCrossed(
          offset,
          currentScrollPosition,
          observerTrack.rootBounds ? observerTrack.rootBounds.height : 0,
          trackRef.current?.getBoundingClientRect().height
        )
      );
    }
  }, [currentScrollPosition, offset, trackRef, observerTrack]);

  return percentCrossed;
}

function calculatePercentCrossed(
  distanceFromTop: number,
  scrollPosition: number,
  distance: number,
  heightOfElement: number
) {
  if (scrollPosition + distance < distanceFromTop) return 0;
  const REDUCE_SCROLL_IN_VIEW = 20;
  const percentCrossed =
    ((scrollPosition + distance - distanceFromTop) / heightOfElement) * 100 - REDUCE_SCROLL_IN_VIEW;
  return percentCrossed < 0 ? 0 : percentCrossed >= 100 ? 100 : percentCrossed;
}
