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

## exclude

- Type: `string`
- Default: `[]`

:::warning
You must use double quotes when passing an array onto the prop in order for this to work correctly.
:::

Pass an array of strings to this option to prevent the Credit Report modal from being triggered.
