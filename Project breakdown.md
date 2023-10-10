# Project breakdown

## Name

Cloning popular retro games with Vue

## Start date

October 5, 2023

## Stack

[Vue](https://vuejs.org/) + [Vite](https://vitejs.dev/) with:

- [Typescript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/) for state management
- [Vitest](https://vitest.dev/) for Unit tests
- [Playwright](https://playwright.dev/) for E2E tests

## My IDE and browser

1. [Visual Studio Code](https://code.visualstudio.com/)

2. Extensions:

   - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
   - [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
   - [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [GitHub Theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme)
   - [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
   - [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
   - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
   - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
   - [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
   - [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
   - [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
   - [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
   - [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)

3. Personal configurations

   - Font:
     ```json
     "terminal.integrated.fontFamily": "MesloLGS NF",
     "editor.fontFamily": "'Fira Code iScript', Menlo, Monaco, 'Courier New', monospace",
     "editor.fontLigatures": true,
     "editor.fontSize": 16,
     "editor.tokenColorCustomizations": {
     "textMateRules": [
        {
        "scope": [
           // the following elements will be in italic
           //   (=Fira Code iScript)
           "comment",
           "keyword.control.import.js", // import
           "keyword.control.export.js", // export
           "keyword.control.from.js", // from
           // "constant", // String, Number, Boolean…, this, super
           "storage.modifier", // static keyword
           "storage.type.class", // class keyword
           "storage.type.php", // typehints in methods keyword
           "keyword.other.new.php", // new
           "entity.other.attribute-name", // html attributes
           "fenced_code.block.language.markdown", // markdown language modifier
           "variable.language.this",
           "entity.name.function"
        ],
        "settings": {
           "fontStyle": "italic"
        }
        },
        {
        "scope": [
           // the following elements will be displayed in bold
           "entity.name.type.class" // class names
        ],
        "settings": {
           "fontStyle": "bold"
        }
        },
        {
        "scope": [
           // the following elements will be displayed in bold and italic
           "entity.name.section.markdown" // markdown headlines
        ],
        "settings": {
           "fontStyle": "italic bold"
        }
        },
        {
        "scope": [
           // the following elements will be excluded from italics
           //   (VSCode has some defaults for italics)
           "invalid",
           "keyword.operator",
           "constant.numeric.css",
           "keyword.other.unit.px.css",
           "constant.numeric.decimal.js",
           "constant.numeric.json",
           "comment.block",
           "entity.other.attribute-name.class.css"
        ],
        "settings": {
           "fontStyle": ""
        }
        }
     ]
     }
     ```

4. [Chrome](https://www.google.com/chrome/) with [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

## Creation of the app

1. (Optional) Ensure you're on [Node.js](https://nodejs.org/en) v16 or higher:

   ```bash
   nvm install
   node --version
   ```

2. Create Vue app:

   ```bash
   npm create vue@latest
      Project name: Retro-games-collection
      Package name: retro-games-collection
      TypeScript? Yes
      Add JSX Support? No
      Add Vue Router for Single Page Application development? Yes
      Add Pinia for state management? Yes
      Add Vitest for Unit testing? Yes
      Add an End-to-End Testing Solution? Playwright
      Add ESLint for code quality? Yes
      Add Prettier for code formatting? Yes
   ```

3. Next steps:

   ```bash
   cd Retro-games-collection
   npm install
   #Add Sass for more powerfull css
   npm install -D sass
   npm run format
   npm run dev
   code .
   ```

The recommended IDE setup is [Visual Studio Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension

## Planning

- Vue
  - ✅ Read [docs](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)
  - 🔲 Complete [tutorial](https://vuejs.org/tutorial/#step-1)
  - ✅ Watch [Youtube videos](https://www.youtube.com/watch?v=IgBOT0QyByQ&t)
- Typescript
  - 🔲 Read [docs](https://www.typescriptlang.org/docs/handbook/intro.html)
  - 🔲 Watch [Youtube Dave Gray Video](https://www.youtube.com/watch?v=gieEQFIfgYc&t)
- Vue Router
  - 🔲 Read [docs](https://router.vuejs.org/guide/)
  - ✅ Watch [tutorial](https://vueschool.io/courses/vue-router-4-for-everyone?friend=vuerouter)
- Pinia
  - 🔲 Read [docs](https://pinia.vuejs.org/introduction.html)
  - Watch [Youtube videos](https://www.youtube.com/watch?v=JGC7aAC-3y8)
- Playwright
  - 🔲 Read [docs](https://playwright.dev/docs/intro)
  - 🔲 Watch [Youtube videos](https://www.youtube.com/watch?v=wawbt1cATsk)
  - 🔲 Watch some more [Youtube videos](https://www.youtube.com/@Playwrightdev/videos)
- 🔲 [Create Vue app](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)
- Test Driven Development (TDD)
  - 🔲 Write failing test
  - 🔲 Develop funcionality
  - 🔲 Test passes
  - 🔲 Repeat
- Deploy for production
  - 🔲 Choose a serverless deployment platform:
    - Vercel?
    - Netlify?
    - Firebase?

## Log:

- Choosing to use TypeScript has shown that learning from a beginner's tutorial, which is usually coded with the Options API, can be more difficult. While Vue does support TypeScript usage with the Options API, it is recommended to use Vue with TypeScript via the Composition API, as it offers simpler, more efficient, and more robust type inference. Check this [page](https://vuejs.org/guide/typescript/options-api.html) for more information and this [page](https://www.programcreek.com/typescript/?api=vue.defineComponent) for some code examples.
- Installed [FontAwesome Icons](https://fontawesome.com/v6/docs/web/use-with/vue/)
- Keeping the navbar and footer on top of the center container:

  ```css
  body {
    min-height: 100vh;
    overflow: hidden;
  }
  .container {
    margin-top: $navbar-height;
    margin-bottom: $footer-height;
    height: calc(100vh - $navbar-height - $footer-height);
    overflow: auto;
  }
  nav {
    overflow: hidden;
    position: fixed;
    top: 0;
    height: $navbar-height;
    width: 100vw;
    padding: 10px;
    background: $color-background-nav;
    z-index: 2;

    span {
      float: right;
      display: flex;
      gap: 10px;
    }

    a {
      color: $color-text;
      cursor: pointer;
      text-decoration: none;
      user-select: none;
      &:link,
      &:visited {
        color: inherit;
      }
      &:hover,
      &:active {
        color: darken($color: $color-text, $amount: 15%);
      }
    }

    .app-active-link {
      font-weight: bold;
    }
  }
  footer {
    height: $footer-height;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100vw;
    padding: 10px;
    background: $color-background-footer;
    z-index: 2;

    span {
      float: right;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    a {
      padding: 0 10px;
      color: $color-text;
      cursor: pointer;
      text-decoration: none;
      user-select: none;
      &:link,
      &:visited {
        color: inherit;
      }
      &:hover,
      &:active {
        color: darken($color: $color-text, $amount: 15%);
      }
    }
  }
  ```

- Add the images for the game cards to the public folder. I've tried to put the images in the assets folder, but I couldn't get the URL for the src attribute on the component.
