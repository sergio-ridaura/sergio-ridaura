import type LinkType from "../link/default.type";

/**
 * Navbar Props Type.
 */
export default interface NavbarType {
  title?: string;
  description?: string;
  className?: string;
  links?: LinkType[] | [];
}
