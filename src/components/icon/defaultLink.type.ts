/**
 * Icon with link Props Type.
 */
export default interface IconLinkType {
  id?: string;
  size?: number;
  viewBox?: string;
  color?: string;
  background?: string;
  title?: string;
  description?: string;
  className?: string;
  addClass?: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  prefetch?: boolean;
}
