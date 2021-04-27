# Features

At the core, our Credit Report plugin is simply a client-side plugin that can be implemented into any website via some static files.

## Popup Blocker Detection

Modern browsers come with so many privacy features that allows the user to quickly and easily disable popups, this means that the default implementation may not work correctly.

Our plugin will automatically try and detect whether a customer's browser has got popups blocked, and will then trigger our Credit Report modal, otherwise the standard method of opening the Credit Report in a new browser tab without user interaction will be used.
