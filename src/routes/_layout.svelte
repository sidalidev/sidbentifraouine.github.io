<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    display: flex;
    flex-direction: column;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
