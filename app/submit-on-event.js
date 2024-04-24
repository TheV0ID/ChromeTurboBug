import {once} from './common'

export default function (container, selector) {
    container.querySelectorAll(selector).forEach(function (match) {
        once(match, 'submit-on-event', init);
    });
}

function init(el) {
    if (el.classList.contains("submit-on-enter")) {
        el.addEventListener('keypress', function (event) {
            if (event.key === "Enter") {
                submitIfValid(this.form);
                event.stopPropagation();
                event.preventDefault();
            }
        });
    }
    if (el.classList.contains("submit-on-change")) {
        el.addEventListener('change', function () {
            submitIfValid(this.form);
        });
    }
    if (el.classList.contains("submit-on-blur")) {
        el.addEventListener('blur', function () {
            submitIfValid(this.form);
        });
    }
}

function submitIfValid(form) {
    if (!form) {
        console.log("Form to submit not defined.");
    } else if (form.checkValidity()) {
        form.requestSubmit();
    } else {
        form.reportValidity();
    }
}


