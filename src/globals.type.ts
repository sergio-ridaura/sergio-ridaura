/**
 * Global variables Type.
 */
export default interface GlobalsType {
  name: string;
  short_name: string;
  description: string;
  author: {
    name: string;
    url: string;
    email: string;
  };
  keywords: string[];
  site: string;
  manifest: {
    theme_color: string;
    background_color: string;
  };
}
