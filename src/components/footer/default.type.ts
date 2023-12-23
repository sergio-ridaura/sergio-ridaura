import type { IconsLinkElementType } from "../icons/defaultLink.type";

/**
 * Footer Props Type.
 */
export default interface FooterType {
  name?: string;
  text?: string;
  className?: string;
  icons?: IconsLinkElementType[] | [];
}
