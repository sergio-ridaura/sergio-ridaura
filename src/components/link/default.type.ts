/**
 * Link Props Type.
 */
export default interface LinkType {
  id?: string;
  title: string;
  description?: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  prefetch?: boolean;
  className?: string;
}
