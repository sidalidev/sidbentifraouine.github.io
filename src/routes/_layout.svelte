<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    margin: var(--metric-medium) auto;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
