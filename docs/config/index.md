---
sidebar: auto
---

# Config Reference

## api

- Type: `string`

Set where the Credit Report application should be processed and where the customer should be taken to afterwards.

## mode

- Type: `string`
- Default: `modal`
- Supported Options: `modal`, `legacy`

If you'd like to always show a modal (modern), then pass this option, otherwise we'll automatically try and open the api URL in a new browser tab with the generated Credit Report URL.

## excludeAffiliates

- Type: `array`
- Default: `[]`

Pass an array of strings/affiliates to this option to prevent the Credit Report modal from being triggered.

## tracking

- Type: `object`
- Default:

```javascript
{
  tlp: '' // string
}
```

Used for tracking.

## applicant

- Type: `object`
- Default:

```javascript
{
  title: '', // string
  name: {
    first: '', // string
    last: '' // string
  },
  mobile: '', // string
  birthday: '', // string
  email: '', // string
  address: {
    house: '', // string
    street: '', // string
    city: '', // string
    postcode: '' // string
  }
}
```

All of the above applicant fields must be filled in order to successfully generate a Credit Report URL that will redirect the customer to. You can fill these fields in your implementation via your client-side code.
