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

1. include required [Vue JS](https://vuejs.org/v2/guide/installation.html#CDN) dependency

> Vue JS is used as a dependency of our plugin. You do not need to configure or modify this, but must import it just before our plugin.

```html
<script src="https://unpkg.com/vue@2.6.11/dist/vue.min.js"></script>
```

2. link to our plugin in your website just before the closing `</body>` tag

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
│   ├── vue-les-creditreport.js
│   ├── vue-les-creditreport.js.map
│   ├── vue-les-creditreport.min.js
│   └── vue-les-creditreport.min.js.map
```

We recommend using a `*.min` file for production, otherwise feel free to use an alternative for development.

### Quick Start

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Website</title>
  </head>
  <body>

    <!-- Your markup -->
    <vue-les-creditreport
      mode="modal"
      api="https://example.com/"
      exclude='["string1". "string2"]'>
    </vue-les-creditreport>

    <!-- Link to plugin -->
    <script src="https://unpkg.com/vue@2.6.11/dist/vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/stsonline/vue-les-creditreport@1.0/dist/vue-les-creditreport.min.js"></script>
  </body>
</html>
```

### Submitting a Credit Report application

Using our events, you'll need to build into your web application a way of triggering an application, there are several ways that you can do this, here's some pointers:

- Provide some form of form that collects the required fields to set an application, attach a `name` attribute to each field
- Use Javascript to target these fields and get their value to pass into our event.
- Then submit an application based on whether a checkbox is checked or not _(this provides the customer with a way of opting in)_

```javascript
function launchCreditReport (applicantDetails = {}) {
  const isLaunchable = document.querySelector('input[name="creditOptIn"]')

  // customer never opted in
  if (!isLaunchable.checked) {
    return
  }

  // set the applicant & submit form
  try {
    document.dispatchEvent(new CustomEvent('vuelescreditreport:applicant:set', {
      detail: {
        title: applicantDetails.AppTitle,
        name: {
          first: applicantDetails.AppFirstName,
          last: applicantDetails.AppLastName
        },
        mobile: applicantDetails.AppMobilePhone,
        dobDay: applicantDetails.AppDOBDay,
        dobMonth: applicantDetails.AppDOBMonth,
        dobYear: applicantDetails.AppDOBYear,
        email: applicantDetails.AppEmail,
        address: {
          house: applicantDetails.AppHouseNumber,
          street: applicantDetails.AppStreet,
          city: applicantDetails.AppTown,
          postcode: applicantDetails.AppPostCode
        },
        tlp: applicantDetails.tlp_aff_id
      }
    }))
    document.dispatchEvent(new Event('vuelescreditreport:submit'))
  } catch (err) {
    // handle your error
  }
}
``
