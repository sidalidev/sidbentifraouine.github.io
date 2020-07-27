<style>
  .separator {
    width: 300px;
    align-self: center;
    margin: 120px;
  }
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
    margin: 0 0 32px;
  }

  .skill-list {
    display: flex;
    justify-content: space-between;
  }

  .skill-card {
    height: 300px;
    width: 230px;
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

  /* Tools */
  .tool-list img {
    height: 40px;
  }

  .tool-list .row {
    margin: 40px 0;
    display: flex;
    justify-content: space-around;
  }

  /* Job */
  .job {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 100px 0;
  }
  .job.inverted {
    flex-direction: row-reverse;
  }
  .job img {
    width: 40%;
  }

  .job .description {
    width: 50%;
  }
  .job .description h4 span {
    font-size: 0.7em;
    color: var(--color-primary);
  }

  /* Contact */
  .contact {
    display: flex;
    flex-direction: column;
  }

  .contact > a {
    padding: 16px 32px;
    /* background-color: var(--color-secondary); */
    text-decoration: none;
    color: var(--color-primary);
    /* border-radius: 8px; */
    align-self: center;
    border: 4px solid var(--color-primary);
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
  }

  .social-links {
    margin: 32px 0;
    align-self: center;
    display: flex;
    justify-content: space-between;
  }
  .social-links a {
    text-decoration: none;
    margin: 0 8px;
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
  <img alt="Sid coding" src="typing illus.png" />
  <div class="greeting">
    <div class="text">
      <h1>Hi, I’m Sid</h1>
      <h4>A Fullstack JavaScript Engineer</h4>
    </div>
    <img alt="Flower pot" src="flowers.png" />
  </div>
</section>

<img class="separator" src="hr_skills.png" alt="Horizontal separator" />

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

<img class="separator" src="hr_tools.png" alt="Horizontal separator" />

<section>
  <h3 class="title">My tools</h3>
  <div class="tool-list">
    <div class="row">
      <img src="tools/figma.png" alt="figma" />
      <img src="tools/react.png" alt="react" />
      <img src="tools/gatsby.png" alt="gatsby" />
      <img src="tools/next.png" alt="next" />
      <img src="tools/flutter.png" alt="flutter" />
      <img src="tools/svelte.png" alt="svelte" />
    </div>
    <div class="row">
      <img src="tools/node.png" alt="node" />
      <img src="tools/express.png" alt="express" />
      <img src="tools/apollo.png" alt="apollo" />
      <img src="tools/prisma.png" alt="prisma" />
    </div>
  </div>
</section>

<img class="separator" src="hr_job.png" alt="Horizontal separator" />

<section>
  <h3 class="title">My current job</h3>
  <div class="job">
    <img src="images/jobs/ector.png" alt="Ector" />
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
  </div>

  <div class="job inverted">
    <img src="images/jobs/uphf.png" alt="UPHF" />
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
  </div>
</section>

<img class="separator" src="hr_job.png" alt="Horizontal separator" />

<section>
  <h3 class="title">More about me</h3>
  <div class="job">
    <img
      src="images/about/sport.png"
      alt="Sketch of a Football ball and Judo belt" />
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
  </div>

  <div class="job inverted">
    <img src="images/about/pizza.png" alt="Sketch of a Pizza" />
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
  </div>
</section>

<img class="separator" src="hr_job.png" alt="Horizontal separator" />

<section class="contact">
  <a href="mailto:sidbentifraouine@gmail.com?subject=Hi there 🖖!">
    Let's get in touch
  </a>
  <div class="social-links">
    <a
      rel="external"
      target="_blank"
      href="https://www.linkedin.com/in/sidbentifraouine/">
      <img src="images/contact/linkedin.svg" alt="LinkedIn logo" />
    </a>
    <a
      rel="external"
      target="_blank"
      href="https://github.com/sidbentifraouine">
      <img src="images/contact/github.svg" alt="Github logo" />
    </a>
    <a rel="external" target="_blank" href="https://twitter.com/sbentifraouine">
      <img src="images/contact/twitter.svg" alt="Twitter logo" />
    </a>
  </div>
</section>
