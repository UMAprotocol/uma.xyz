"use client";

import {
  animationDuration,
  black,
  bodyLg,
  bodyMd,
  bodySm,
  bodyXl,
  bodyXs,
  desktopHeaderHeight,
  desktopPagePadding,
  desktopPageWidth,
  grey100,
  grey100Opacity20,
  grey200,
  grey300,
  grey400,
  grey400Opacity20,
  grey500,
  grey600,
  grey700,
  grey800,
  headerBlurHeight,
  headerLg,
  headerMd,
  headerSm,
  headerXs,
  mobileAndUnder,
  mobileHeaderHeight,
  mobilePagePadding,
  mobilePageWidth,
  red,
  red510Opacity15,
  red550,
  subHeader,
  subHeaderSm,
  tabletAndUnder,
  tabletPagePadding,
  tabletPageWidth,
  voteTickerHeight,
  white,
  white200,
  whiteOpacity10,
} from "@/constant";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 /* CSS Reset */
 * {
  /* Remove default margin on everything */
  margin: 0;
  /* Remove default padding on everything */
  padding: 0;
  /* Calc em based line height, bigger line height for smaller font size and smaller line height for bigger font size: https://kittygiraudel.com/2020/05/18/using-calc-to-figure-out-optimal-line-height/ */
  line-height: calc(0.25rem + 1em + 0.25rem);
}

/* Use a more-intuitive box-sizing model on everything */
*,
::before,
::after {
  box-sizing: border-box;
}

/* Remove border and set sensible defaults for backgrounds, on all elements except fieldset progress and meter */
*:where(:not(fieldset, progress, meter)) {
  border-width: 0;
  border-style: solid;
  background-origin: border-box;
  background-repeat: no-repeat;
}

html {
  /* Allow percentage-based heights in the application */
  block-size: 100%;
  /* Making sure text size is only controlled by font-size */
  -webkit-text-size-adjust: none;
}

/* Smooth scrolling for users that don't prefer reduced motion */
@media (prefers-reduced-motion: no-preference) {
  html:focus-within {
    // todo: for reasons I don't understand and can't track down, it seems that nextjs overwrites the scroll behavior to auto on load.
    // This is a hacky fix to make sure that the scroll behavior is smooth.
    // would be great if someone could figure out why and fix it at the source.
    scroll-behavior: smooth !important;
  }
}

body {
  /* Improve text rendering */
  -webkit-font-smoothing: antialiased;
  /* https://marco.org/2012/11/15/text-rendering-optimize-legibility */
  text-rendering: optimizeSpeed;
  /* Allow percentage-based heights in the application */
  min-block-size: 100%;
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter#example_2 */
  /* scrollbar-gutter: stable both-edges; Removed until this bug is fixed: https://bugs.chromium.org/p/chromium/issues/detail?id=1318404#c2 */
}

/* Improve media defaults */
:where(img, svg, video, canvas, audio, iframe, embed, object) {
  display: block;
}
:where(img, svg, video) {
  block-size: auto;
  max-inline-size: 100%;
}

/* Remove stroke and set fill color to the inherited font color */
:where(svg) {
  stroke: none;
  fill: currentColor;
}

/* SVG's without a fill attribute */
:where(svg):where(:not([fill])) {
  /* Remove fill and set stroke color to the inherited font color */
  stroke: currentColor;
  fill: none;
  /* Rounded stroke */
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Set a size for SVG's without a width attribute */
:where(svg):where(:not([width])) {
  inline-size: 5rem;
}

/* Remove built-in form typography styles */
:where(input, button, textarea, select),
:where(input[type="file"])::-webkit-file-upload-button {
  color: inherit;
  font: inherit;
  font-size: inherit;
  letter-spacing: inherit;
}

/* Change textarea resize to vertical only and block only if the browser supports that */
:where(textarea) {
  resize: vertical;
}
@supports (resize: block) {
  :where(textarea) {
    resize: block;
  }
}

/* Avoid text overflows */
:where(p, h1, h2, h3, h4, h5, h6) {
  overflow-wrap: break-word;
}

/* Fix h1 font size inside article, aside, nav, and section */
h1 {
  font-size: 2em;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
:where(ul, ol)[role="list"] {
  list-style: none;
}

/* More readable underline style for anchor tags without a class. This could be set on anchor tags globally, but it can cause conflicts. */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make it clear that interactive elements are interactive */
:where(a[href], area, button, input, label[for], select, summary, textarea, [tabindex]:not([tabindex*="-"])) {
  cursor: pointer;
  touch-action: manipulation;
}
:where(input[type="file"]) {
  cursor: auto;
}
:where(input[type="file"])::-webkit-file-upload-button,
:where(input[type="file"])::file-selector-button {
  cursor: pointer;
}

/* Animate focus outline */
@media (prefers-reduced-motion: no-preference) {
  :focus-visible {
    transition: outline-offset 145ms cubic-bezier(0.25, 0, 0.4, 1);
  }
  :where(:not(:active)):focus-visible {
    transition-duration: 0.25s;
  }
}
:where(:not(:active)):focus-visible {
  outline-offset: 5px;
}

/* Make sure users can't select button text */
:where(button, button[type], input[type="button"], input[type="submit"], input[type="reset"]),
:where(input[type="file"])::-webkit-file-upload-button,
:where(input[type="file"])::file-selector-button {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  text-align: center;
}

/* Disabled cursor for disabled buttons */
:where(button, button[type], input[type="button"], input[type="submit"], input[type="reset"])[disabled] {
  cursor: not-allowed;
}

/* Allow percentage-based full height */
html, body, #__next {
  height: 100%;
}

/* Global style definitions */

  /*  All CSS custom properties that are intended to be global must be defined here */

  html {
    /* Colors */
    --black: ${black};
    --white: ${white};
    --white-opacity-10: ${whiteOpacity10};
    --white-200: ${white200};
    --red: ${red};
    --red-510-opacity-15: ${red510Opacity15};
    --red-550: ${red550};
    --grey-100: ${grey100};
    --grey-100-opacity-20: ${grey100Opacity20};
    --grey-200: ${grey200};
    --grey-300: ${grey300};
    --grey-400: ${grey400};
    --grey-400-opacity-20: ${grey400Opacity20};
    --grey-500: ${grey500};
    --grey-600: ${grey600};
    --grey-700: ${grey700};
    --grey-800: ${grey800};

    /* Fonts */
    --header-lg: ${headerLg};
    --header-md: ${headerMd};
    --header-sm: ${headerSm};
    --header-xs: ${headerXs};
    --sub-header: ${subHeader};
    --sub-header-sm: ${subHeaderSm};
    --body-xl: ${bodyXl};
    --body-lg: ${bodyLg};
    --body-md: ${bodyMd};
    --body-sm: ${bodySm};
    --body-xs: ${bodyXs};

    /* Containers */
    --desktop-page-width: ${desktopPageWidth}px;
    --tablet-page-width: ${tabletPageWidth}px;
    --mobile-page-width: ${mobilePageWidth}px;
    --page-width: var(--desktop-page-width);
    @media ${tabletAndUnder} {
      --page-width: var(--tablet-page-width);
    }
    @media ${mobileAndUnder} {
      --page-width: var(--mobile-page-width);
    }
    --desktop-header-height: ${desktopHeaderHeight}px;
    --mobile-header-height: ${mobileHeaderHeight}px;
    --header-height: var(--desktop-header-height);
    @media ${mobileAndUnder} {
      --header-height: var(--mobile-header-height);
    }
    --header-blur-height: ${headerBlurHeight}px;
    --vote-ticker-height: ${voteTickerHeight}px;
    --desktop-page-padding: ${desktopPagePadding}px;
    --tablet-page-padding: ${tabletPagePadding}px;
    --mobile-page-padding: ${mobilePagePadding}px;
    --page-padding: var(--desktop-page-padding);
    @media ${tabletAndUnder} {
      --page-padding: var(--tablet-page-padding);
    }
    @media ${mobileAndUnder} {
      --page-padding: var(--mobile-page-padding);
    }
    /* Animation */
    --animation-duration: ${animationDuration};

    // Sandpack override
    --sp-layout-height: 347px !important;
  }

  body {
    color: var(--grey-100);
  }
`;
