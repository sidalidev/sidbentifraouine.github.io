<style>
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 124px 0;
  }

  .hero .greeting {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .hero .greeting img {
    height: 160px;
    align-self: flex-end;
  }
</style>

<svelte:head>
  <title>Sid 👨‍🎨</title>
</svelte:head>

<section class="hero">
  <img alt="Sid coding" src="typing illus.png" />
  <div class="greeting">
    <div class="text">
      <h1>Hi, I’m Sid</h1>
      <h3>A Fullstack JavaScript Engineer</h3>
    </div>
    <img alt="Flower pot" src="flowers.png" />
  </div>
</section>
