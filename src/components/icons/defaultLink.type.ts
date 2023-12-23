/**
 * Icons link elements Type.
 */
export interface IconsLinkElementType {
  id?: string;
  size?: number;
  viewBox?: string;
  color?: string;
  title?: string;
  description?: string;
  className?: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  prefetch?: boolean;
  type: "blog" | "email" | "github" | "linkedin" | "rss";
}

/**
 * Icons link Props Type
 */
export interface IconsLinkType {
  className?: string;
  icons: IconsLinkElementType[];
}

/**
 * Icons link component map
 */
export interface IconsLinkMapType {
  blog: IconsLinkType;
  email: IconsLinkType;
  github: IconsLinkType;
  linkedin: IconsLinkType;
  rss: IconsLinkType;
}
