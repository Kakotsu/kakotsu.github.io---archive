<!-- __layout.svelte -->
<script>
	import PageTransition from "$lib/components/PageTransition.svelte"
	export let key
	import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'sveltestrap';
	
	let isOpen = false;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
</script>

<!-- 1. Assign current route's path to `key` prop -->
<script context="module">
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  })
</script>

<div>
	<Navbar color="dark" dark expand="md">
	  <NavbarBrand href="/">Kakotsu</NavbarBrand>
	  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
	  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto" navbar>
			<Dropdown nav inNavbar dark color="dark">
				<DropdownToggle nav caret>Projects</DropdownToggle>
				<DropdownMenu end dark color="dark">
					<DropdownItem>AnataJS</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>KokoroBridge</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>TakumiJS</DropdownItem>
					<DropdownItem>TakumiTS</DropdownItem>
					<DropdownItem>TakumiPY</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		  <NavItem>
			<NavLink href="/credits">Credits</NavLink>
		  </NavItem>
		  <NavItem>
			<NavLink href="/">About</NavLink>
		  </NavItem>
		</Nav>
	  </Collapse>
	</Navbar>

	<!-- 2. Pass `key` prop to the component so it knows when to transition -->
	<PageTransition refresh={key}>
		<slot />
	</PageTransition>
</div>