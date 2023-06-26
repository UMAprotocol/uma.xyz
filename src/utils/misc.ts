export function isExternalLink(href: string) {
  if (href.startsWith("/") || href.startsWith("#")) return false;
  return true;
}
