<style>
  /* Generic */
  .separator {
    width: 20em;
    align-self: center;
  }

  section {
    margin: 8em 8em;
  }

  section > .title {
    margin: 0 0 4em;
  }

  /* Hero Section*/
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4em;
    align-items: center;
    margin: 8em 4em;
  }

  .hero .greeting-text {
  }
  .hero .greeting-image {
    width: 100%;
  }

  /* Skills Section*/
  .skills .skill-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4em;
    justify-items: center;
    align-items: center;
  }

  .skills .skill-card {
    display: grid;
    grid-template-rows: auto auto;
    align-items: center;
    justify-items: center;
    height: 100%;
    padding: 1em;

    border: 0.1em solid var(--textColor);
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
  }

  .skill-card .title {
    vertical-align: center;
  }
  .skill-card .image {
    max-width: 100%;
  }

  /* Tools */
  .tool-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 4em;
  }

  .tool-list img {
    height: 3em;
  }

  /* Job */
  .job .job-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    grid-column-gap: 2em;
    grid-row-gap: 4em;
  }

  .job-list img {
    max-width: 100%;
  }

  .job-list h4 span {
    font-size: 0.7em;
    color: var(--color-primary);
  }

  /* Hobbies */
  .hobbies .hobby-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    grid-column-gap: 2em;
    grid-row-gap: 4em;
  }

  .hobby-list img {
    max-width: 100%;
  }

  /* Contact */
  .contact {
    display: flex;
    flex-direction: column;
  }

  .contact > a {
    padding: 16px 32px;
    background-color: var(--textColor);
    text-decoration: none;
    color: var(--backgroundColor);
    /* border-radius: 8px; */
    align-self: center;
    border: 1px solid var(--textColor);
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
  }

  .social-links {
    margin: 64px 0;
    align-self: center;
    display: flex;
    justify-content: space-between;
  }
  .social-links a {
    text-decoration: none;
    margin: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .social-links a img {
    height: 32px;
  }
</style>

<svelte:head>
  <title>Sid 👨‍🎨</title>
</svelte:head>

<section class="hero">
  <div class="greeting-text">
    <h1>Hi, I’m Sid</h1>
    <h4>A Fullstack JavaScript Engineer</h4>
  </div>
  <img class="greeting-image" src="images/typing.svg" />
</section>

<img class="separator" src="images/hr_skills.svg" />

<section class="skills">
  <h3 class="title">I know to</h3>
  <div class="skill-list">
    <div class="skill-card">
      <img src="images/skills_uxui.svg" class="image" />
      <h5 class="title">UX & UI Design</h5>
    </div>
    <div class="skill-card">
      <img src="images/skills_web.svg" class="image" />
      <h5 class="title">Web Dev</h5>
    </div>
    <div class="skill-card">
      <img src="images/skills_mobile.svg" class="image" />
      <h5 class="title">Mobile Dev</h5>
    </div>
  </div>
</section>

<img class="separator" src="images/hr_tools.svg" />

<section class="tools">
  <h3 class="title">My tools</h3>
  <div class="tool-list">
    <img src="images/icons/figma.svg" alt="figma" />
    <img src="images/icons/react.svg" alt="react" />
    <img src="images/icons/gatsby.svg" alt="gatsby" />
    <img src="images/icons/next.svg" alt="next" />
    <img src="images/icons/flutter.svg" alt="flutter" />
    <img src="images/icons/svelte.svg" alt="svelte" />
    <img src="images/icons/node.svg" alt="node" />
    <img src="images/icons/express.svg" alt="express" />
    <img src="images/icons/apollo.svg" alt="apollo" />
    <img src="images/icons/prisma.svg" alt="prisma" />
  </div>
</section>

<img class="separator" src="images/hr_skills.svg" />

<section class="job">
  <h3 class="title">My current job</h3>

  <div class="job-list">
    <!-- ECTOR -->
    <img src="images/ector.svg" alt="Ector" />
    <div class="description">
      <h4>
        <span>Fullstack Engineer at</span>
        ECTOR
      </h4>
      <p>
        Ector is the valet parking service at train stations and airports that
        parks your car for you. It makes you save time and save up to 50% on
        parking !
      </p>
      <p>
        I’m working with an awesome team on the developping the solutions for
        Web with Gatsby, Mobile with React Native to make the service fit the
        needs of our beloved customers.
      </p>
    </div>

    <!-- UPHF -->
    <div class="description">
      <h4>
        <span>Teacher at</span>
        UPHF
      </h4>
      <p>
        Université Polytechnique Hauts-de-France is also the university where I
        studied and got my Master Degree in Computer Science.
      </p>
      <p>
        When I was a student, I loved how some teachers made me love a specific
        subject. Inspired by them, I wanted to do the same thing and try my best
        to share what know.
      </p>
      <p>
        Today, I teach Master 2 students how to make Cross Platform Mobile Apps
        with React Native, Flutter and Ionic.
      </p>
    </div>
    <img src="images/uphf.svg" alt="UPHF" />

  </div>
</section>

<img class="separator" src="images/hr_skills.svg" />

<section class="hobbies">
  <h3 class="title">More about me</h3>
  <div class="hobby-list">
    <img src="images/sport.svg" alt="Sketch of a Football ball and Judo belt" />
    <div class="description">
      <h4>Sport</h4>
      <p>
        Ector is the valet parking service at train stations and airports that
        parks your car for you. It makes you save time and save up to 50% on
        parking !
      </p>
      <p>
        I’m working with an awesome team on the developping the solutions for
        Web with Gatsby, Mobile with React Native to make the service fit the
        needs of our beloved customers.
      </p>
    </div>

    <div class="description">
      <h4>Learning</h4>
      <p>
        It can be professional, artistic or sometimes stuff that can appear
        useless to others… I love learning new things.
      </p>
      <p>
        It can be painting, or how to prepare traditional Napolitan Pizza, or
        how to speak Italian.
      </p>
      <p>Everything that I don’t know yet attracts me…</p>
    </div>
    <img src="images/pizza.svg" alt="Sketch of a Pizza" />
  </div>
</section>

<img class="separator" src="images/hr_contact.svg" />

<section class="contact">
  <a href="mailto:sidbentifraouine@gmail.com?subject=Hi there 🖖!">
    Let's get in touch
  </a>
  <div class="social-links">
    <a
      rel="external"
      target="_blank"
      href="https://www.linkedin.com/in/sidbentifraouine/">
      <img src="images/icons/linkedin.svg" alt="LinkedIn logo" />
    </a>
    <a
      rel="external"
      target="_blank"
      href="https://github.com/sidbentifraouine">
      <img src="images/icons/github.svg" alt="Github logo" />
    </a>
    <a rel="external" target="_blank" href="https://twitter.com/sbentifraouine">
      <img src="images/icons/twitter.svg" alt="Twitter logo" />
    </a>
  </div>
</section>
