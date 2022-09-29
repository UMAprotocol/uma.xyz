import { ReactNode } from "react";

/** Used to wrap pages.
 *
 * Add headers, footers, and other common elements here.
 */
export function Layout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
