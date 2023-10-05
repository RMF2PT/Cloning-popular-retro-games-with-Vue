# Project: Cloning popular retro games with Vue

Welcome to my personal project.
This is my playground to learn Vue+Vite with Typescript in a Test Driven Development (TDD) style.

This is the technologies I'm planning to use in this project:

- **[Vue](https://vuejs.org/) + [Vite](https://vitejs.dev/)**
- **[Typescript](https://www.typescriptlang.org/)** to have a static typechecker for JavaScript.
- **[SASS](https://sass-lang.com/)** to allow the use of variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. I know that some of this stuff (like [nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)) already exists in CSS, but I want to give SASS a try.
- **[PostCSS](https://postcss.org/)** for CSS syntax transformations with tools like [Autoprefixer](https://autoprefixer.github.io/)
- **[Pinia](https://pinia.vuejs.org/)** for state management
- **[Vitest](https://vitest.dev/)** for unit testing
- **[Playwright](https://playwright.dev/)** for end-to-end (E2E) testing

Other useful links:

- **[Node.js](https://nodejs.org/en)**
- **[ESLint](https://eslint.org/)**
- **[Prettier](https://prettier.io/)**

## About me

My name is Ricardo Ferreira, and I'm the father of four beautiful kids. My wonderful wife and I spend most of our time caring for and nurturing our family.

In 1999, I had to make a decision and started working as an accountant. Twenty years later, I decided to take control of my life and changed companies and jobs. Now, I'm a Product Owner of the financial products squad of a cloud ERP made by a Portuguese company.

In the little time that I have left, I've never stopped learning, and I'm still trying to achieve my passion: be a web developper and create high-quality apps for a better web.

## Goals of this repo

I have already delved into several programming languages, such as Ruby, Python, C#, and dived shallowly into some frameworks like Ruby on Rails and React.

Last year, I became more interested in HTML, CSS, and vanilla JavaScript, and I'm quite comfortable with these languages.

I believe that now it's time to improve my programming skills and expand my knowledge.

So, I'm building this project to start learning:

- TypeScript
- Vite
- Vue
- TDD

I love video games, and so do my kids. So, I came up with the idea of recreating some retro games like Tetris and Tic-Tac-Toe using HTML, CSS, and JavaScript.

It should have a main page where the user can choose the game to play, and then each game will be on its own page.

On my first try at the project, I built a Tetris clone with only HTML, CSS, and vanilla JavaScript, but I ran into many problems when trying to refactor the code.

So I tried to recreate the same project using Vite and Vitest for unit testing. It helped, but unit tests can only go so far, and I felt that a great part of my tests were only testing if the function ran, since most of the inner methods were mocked.

Now, I'm going full head-on with a framework, and since I loved the ease of use of Vite, I've decided to go with Vue and I'm adopting almost all of its optional features.

It will be a challenging project, but I believe that it will give a boost to my programming skills.

## Project breakdown

You can check the project breadown [here](./Project%20breakdown.md)

## Want to test this repo?

ℹ️ Eventualy I'll deploy the app but for the moment if you want to test it you'll have to clone the repo and run it on your local machine

ℹ️ The following instructions assume that you have [Node.js](https://nodejs.org/en) and [Git](https://git-scm.com/) already installed in your system.

❗❗ This is a work in progress. Continuous testing should prevent breaking errors, but things don't always run as we expect it to.

---

### 🚀 Setup and running

1. Clone the repository:

   ```bash
   git clone https://github.com/RMF2PT/Cloning-popular-retro-games-with-Vue.git
   cd Cloning-popular-retro-games-with-Vue
   ```

2. (Optional) Ensure you're on Node v16 or higher:

   ```bash
   nvm install
   node --version
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

5. Try out the app:

   To run locally, open http://localhost:5173

6. Run the tests:

   ```bash
   npm run tests
   ```

## Contact

If you want to contact me you can reach me at [X](https://www.x.com/rmf2pt).

## License (MIT)

See [./LICENSE](./LICENSE) for the full license.

## P.S.

I ❤️ all feedback and I value every second you spend helping me be a better developer. Thank you!
