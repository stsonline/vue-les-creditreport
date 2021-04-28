---
sidebar: auto
---

# Events API

Our plugin contains various events that allow you to interface with the plugin to implement into your website, all of your events should be prefixed with:

- vuelescreditreport:`<EVENT-NAME>`

::: details Using CustomEvent
If one of our events requires the use of `CustomEvent`, please make sure to follow the correct structure when initialising the event, more info can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
:::

## `submit`

- Type: `Event`

Submits the Credit Report form

## `modal:show`

- Type: `Event`

Shows the Credit Report modal

## `modal:hide`

- Type: `Event`

Hides the Credit Report modal

## `applicant:set`

- Type: `CustomEvent`

Set's the applicant for the Credit Report, the data that must be passed to this event is an `applicant` Object in the following format:

```javascript
{
  detail: {
    title: '', // string
    name: {
      first: '', // string
      last: '' // string
    },
    mobile: '', // string
    dobDay: '', // string
    dobMonth: '', // string
    dobYear: '', // string
    email: '', // string
    address: {
      house: '', // string
      street: '', // string
      city: '', // string
      postcode: '' // string
    },
    tlp: '' // string
  }
}
```
