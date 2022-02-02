import { c as create_ssr_component, v as validate_component } from "./app-fc380b10.js";
import { C as Container } from "./Offcanvas.svelte_svelte_type_style_lang-4d80c442.js";
import "cookie";
import "@lukeed/uuid";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Container, "Container").$$render($$result, {
    fluid: true,
    class: "p-3 text-white bg-dark"
  }, {}, {
    default: () => `<h1 class="${"display-3"}">Homepage</h1>
	<p class="${"lead"}">test desc #3
	</p>`
  })}`;
});
export { Routes as default };
