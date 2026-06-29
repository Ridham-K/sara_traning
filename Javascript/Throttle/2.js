function throttle(fn, delay) {
    let lastCall = 0;

    return function () {
        let now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fn();
        }
    };
}

function printMessage() {
    console.log("Running...");
}

const throttledPrint = throttle(printMessage, 1000);

setInterval(() => {
    throttledPrint();
}, 200);