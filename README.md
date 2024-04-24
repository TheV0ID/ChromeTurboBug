# ChromeTurboBug
Minimal example to reproduce browser crash when using Turbo.

## Description of the crash
The bug appeared somewhere between Google Chrome version 123.0.6312.123 and 124.0.6367.79 and can also be reproduced in Microsoft Edge.

When using the Turbo framework the tab crashes on loading a new page. At least this happens when the form is submitted via JavaScript on pressing the Enter key. This does not happen, when the form is reloaded as a reaction to `change` or `blur`.

When the listener for `change` is removed from the code (`app/submit-on-event.js`), the crash does not happen anymore.

The resulting crash produces the error code STATUS_BREAKPOINT in the tab. A simple reload fixes the tab. See the screenshot below.

![screenshot of the crash](error.jpg)

## How to run the example
Clone the repo, then `npm install` then `node server.js`. This will provide the website on localhost:4000.