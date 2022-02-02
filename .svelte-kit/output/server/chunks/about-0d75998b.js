import { c as create_ssr_component, g as add_attribute, h as escape } from "./app-fc380b10.js";
import "cookie";
import "@lukeed/uuid";
let src = "tutorial/image.gif";
let name = "Rick Astley";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<img${add_attribute("src", src, 0)} alt="${escape(name) + " dancing"}">
<p1>About</p1>`;
});
export { About as default };
