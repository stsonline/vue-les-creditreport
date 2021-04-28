---
sidebar: auto
---

# Event Listeners API

Our plugin will dispatch various events that you can listen for to run custom code such as firing events for Google Analytics, or contextually modifying parts of your web application, these custom listeners are similar in structure to our events

- vuelescreditreport:`<EVENT-NAME>`

## `on:submit`

Triggered when the Credit Application has been submitted.

## `on:modal:launch`

Triggered when the Credit modal has been launched.

## `on:redirect`

Triggered when a customer is redirected, either through an auto redirection or via the modal's button.

## `on:popups:blocked`

Triggered when popups are potentially blocked for the customer upon sttempting to submit an application.
