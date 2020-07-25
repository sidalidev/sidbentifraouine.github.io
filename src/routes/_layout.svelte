<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    padding: 0 160px;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
