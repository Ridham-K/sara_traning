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

function greet() {
    console.log("Hello");
}

const throttledGreet = throttle(greet, 2000);

throttledGreet();
throttledGreet();
throttledGreet();