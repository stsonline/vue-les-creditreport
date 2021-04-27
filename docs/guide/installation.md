# Installation

Installing our Credit Report plugin is easy. You'll need to have access to your website's source code to install it.

## Prerequisites

- Access to your website's source code
- Some basic knowledge of [HTML](https://www.w3schools.com/html/html_intro.asp) and [JavaScript](https://www.w3schools.com/js/js_intro.asp)
- A way of collecting customer details, for example, an [html form](https://www.w3schools.com/html/html_forms.asp)

::: details Developing or installing via NPM
If you plan on installing our Credit Report plugin via NPM, or just wish to modify a few things yourself, you're going to need to make sure that you've got a development environment set up. Make sure that you've got the following:

- NPM >= 6.14
- Node >= 12
- Vue CLI >= 4.5
:::

### CDN

You can install our plugin from a CDN, to get started, follow the steps below:

1. link to our plugin in your website just before the closing `</body>` tag

```html
<script src="https://cdn.jsdelivr.net/gh/stsonline/vue-les-creditreport@1.0/dist/vue-les-creditreport.min.js"></script>
```

### NPM

To install our project via NPM, follow the below steps:

1. clone our repo into your project

```bash
# Production Build
npm install git+ssh://git@github.com/stsonline/vue-les-creditreport.git

# Or...
# Development Build
git clone -b dev git@github.com:stsonline/vue-les-creditreport.git node_modules/vue-les-creditreport
cd node_modules/vue-les-creditreport
npm install
npm run package:build
```

### Manual Installation

If you'd prefer, you can [download](https://github.com/stsonline/vue-les-creditreport/releases) the latest version of our plugin and manually install it into your website. Alternatively, you can use Github to clone the project and extract the relevant files into your project.

#### Structure

```bash
├── dist
│   ├── demo.html
│   ├── vue-les-creditreport.js
│   ├── vue-les-creditreport.js.map
│   ├── vue-les-creditreport.min.js
│   └── vue-les-creditreport.min.js.map
```

We recommend using a `*.min` file for production, otherwise feel free to use an alternative for development.
