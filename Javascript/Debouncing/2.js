function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function greet(name) {
    console.log(`Hello ${name}`);
}

const debouncedGreet = debounce(greet, 1000);


debouncedGreet("John");
