<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutCmp'
})
</script>

<template>
  <div class="center">
    <h1>Project: Cloning popular retro games with Vue</h1>
    <section>
      <h2>Introduction</h2>
      Welcome to my personal project. This is my playground to learn Vue+Vite with Typescript in a
      Test Driven Development (TDD) style.
    </section>
    <section>
      <h2>Technologies</h2>
      <p>This is the technologies I'm planning to use in this project:</p>
      <ul>
        <li>
          <a href="https://vuejs.org/" target="_blank">Vue</a> +
          <a href="https://vitejs.dev/" target="_blank">Vite</a>
        </li>
        <li>
          <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> to have a static
          typechecker for JavaScript
        </li>
        <li>
          <a href="https://sass-lang.com/" target="_blank">SASS</a> to allow the use of variables,
          nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. I know
          that some of this stuff (like
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)"
            target="_blank"
            >nesting</a
          >) already exists in CSS, but I want to give SASS a try
        </li>
        <li>
          <a href="https://postcss.org/" target="_blank">PostCSS</a>for CSS syntax transformations
          with tools like
          <a href="https://autoprefixer.github.io/" target="_blank">Autoprefixer</a>
        </li>
        <li><a href="https://pinia.vuejs.org/" target="_blank">Pinia</a> for state management</li>
        <li><a href="https://vitest.dev/" target="_blank">Vitest</a> for unit testing</li>
        <li>
          <a href="https://playwright.dev/" target="_blank">Playwright</a> for end-to-end (E2E)
          testing
        </li>
      </ul>
    </section>
    <section>
      <h2>Other useful links</h2>
      <p>Here's some more useful links:'</p>
      <ul>
        <li><a href="https://nodejs.org/en" target="_blank">Node.js</a></li>
        <li><a href="https://eslint.org/)" target="_blank">ESLint</a></li>
        <li><a href="https://prettier.io/" target="_blank">Prettier</a></li>
      </ul>
    </section>
    <section>
      <h2>About me</h2>
      <p>
        My name is Ricardo Ferreira, and I'm the father of four beautiful kids. My wonderful wife
        and I spend most of our time caring for and nurturing our family.
      </p>
      <p>
        In 1999, I had to make a decision and started working as an accountant. Twenty years later,
        I decided to take control of my life and changed companies and jobs. Now, I'm a Product
        Owner of the financial products squad of a cloud ERP made by a Portuguese company.
      </p>
      <p>
        In the little time that I have left, I've never stopped learning, and I'm still trying to
        achieve my passion: be a web developper and create high-quality apps for a better web.
      </p>
    </section>
    <section>
      <h2>Goals of this project</h2>
      <p>
        I have already delved into several programming languages, such as Ruby, Python, C#, and
        dived shallowly into some frameworks like Ruby on Rails and React.
      </p>
      <p>
        Last year, I became more interested in HTML, CSS, and vanilla JavaScript, and I'm quite
        comfortable with these languages.
      </p>
      <p>
        I believe that now it's time to improve my programming skills and expand my knowledge. So,
        I'm building this project to start learning:
      </p>
      <ul>
        <li>TypeScript</li>
        <li>Vite</li>
        <li>Vue</li>
        <li>TDD</li>
      </ul>
      <p>
        I love video games, and so do my kids. So, I came up with the idea of recreating some retro
        games like Tetris and Tic-Tac-Toe using HTML, CSS, and JavaScript.
      </p>
      <p>
        It should have a main page where the user can choose the game to play, and then each game
        will be on its own page.
      </p>
      <p>
        On my first try at the project, I built a Tetris clone with only HTML, CSS, and vanilla
        JavaScript, but I ran into many problems when trying to refactor the code. So I tried to
        recreate the same project using Vite and Vitest for unit testing. It helped, but unit tests
        can only go so far, and I felt that a great part of my tests were only testing if the
        function ran, since most of the inner methods were mocked.
      </p>
      <p>
        Now, I'm going full head-on with a framework, and since I loved the ease of use of Vite,
        I've decided to go with Vue and I'm adopting almost all of its optional features.
      </p>
      <p>
        It will be a challenging project, but I believe that it will give a boost to my programming
        skills.
      </p>
    </section>
    <section>
      <h2>Project Repository</h2>
      <p>
        You can check the project Repository at
        <a
          href="https://github.com/RMF2PT/Cloning-popular-retro-games-with-Vue/tree/main"
          target="_blank"
          >Github</a
        >
      </p>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/_variables.scss';

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
  padding: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
  text-align: left;
}

section {
  width: 100%;
  margin-bottom: 2rem;
  text-align: left;
}

ul {
  margin-left: 2rem;
}

a {
  color: $color-link;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
