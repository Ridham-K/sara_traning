function debounce(fn, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn();
        }, delay);
    };
}

function greet() {
    console.log("Hello");
}

const debouncedGreet = debounce(greet, 5000);

debouncedGreet();
debouncedGreet();
debouncedGreet();