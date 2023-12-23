/**
 * Icons elements Type.
 */
export interface IconsElementType {
  id?: string;
  size?: number;
  viewBox?: string;
  color?: string;
  title?: string;
  description?: string;
  className?: string;
  type:
    | "blog"
    | "email"
    | "github"
    | "linkedin"
    | "rss"
}

/**
 * Icons Props Type.
 */
export interface IconsType {
  className?: string;
  icons: IconsElementType[];
}

/**
 * Icons component map.
 */
export interface IconsMapType {
  blog: IconsType;
  email: IconsType;
  github: IconsType;
  linkedin: IconsType;
  rss: IconsType;
}
