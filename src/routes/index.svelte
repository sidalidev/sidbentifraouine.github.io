<style>
  .separator {
    width: 240px;
    align-self: center;
  }
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

  /* Skills */
  section .title {
    margin: 32px 0;
  }

  .skill-list {
    display: flex;
    justify-content: space-between;
  }

  .skill-card {
    height: 300px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
    border: solid 4px var(--color-black);
  }
  .skill-card img {
    height: 80%;
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
      <h4>A Fullstack JavaScript Engineer</h4>
    </div>
    <img alt="Flower pot" src="flowers.png" />
  </div>
</section>

<img class="separator" src="skills_separator.png" alt="Horizontal separator" />

<section>
  <h3 class="title">I know to</h3>
  <div class="skill-list">
    <div class="skill-card">
      <img src="uxuidesign.png" alt="UX UI Design" />
      <h4>UX/UI Design</h4>
    </div>
    <div class="skill-card">
      <img src="webdev.png" alt="UX UI Design" />
      <h4>Web Dev</h4>
    </div>
    <div class="skill-card">
      <img src="mobiledev.png" alt="UX UI Design" />
      <h4>Mobile Dev</h4>
    </div>
  </div>
</section>
