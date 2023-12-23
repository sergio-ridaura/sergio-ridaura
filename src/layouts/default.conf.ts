import type { IconsLinkElementType } from "../components/icons/defaultLink.type";
import type LinkType from "../components/link/default.type";

/**
 * Layout configuration.
 */

/**
 * Layout global navbar links
 */
export const links: LinkType[] = [
  {
    title: "Home",
    description: "home",
    href: "/",
    prefetch: true,
  },
  {
    title: "Blog",
    description: "blog",
    href: "/blog",
    prefetch: true,
  },
];

/**
 * Layout icons footer.
 */
export const icons: IconsLinkElementType[] = [
  {
    size: 22,
    href: "sergio.ridaura@outlook.com",
    className: "mt-1",
    type: "email",
  },
  {
    size: 25,
    href: "/rss.xml",
    type: "rss",
  },
  {
    size: 25,
    href: "https://github.com/sergio-ridaura",
    target: "_blank",
    type: "github",
  },
  {
    size: 25,
    href: "https://www.linkedin.com/in/sergio-ridaura/",
    target: "_blank",
    type: "linkedin",
  },
];
