import submitOnEvent from "./submit-on-event";

import * as Turbo from "@hotwired/turbo"

Turbo.session.drive = false;

function initialize(container) {
    submitOnEvent(container, ".submit-on-enter");
    submitOnEvent(container, ".submit-on-change");
    submitOnEvent(container, ".submit-on-blur");
}

document.addEventListener("DOMContentLoaded", function () {
    initialize(document);
});

document.addEventListener("turbo:load", function (event) {
    initialize(event.target);
});





