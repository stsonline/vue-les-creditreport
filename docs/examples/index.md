# Examples

We've put together these quick examples to help you get up and running.

## Quick Start

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
