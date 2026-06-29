function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function saveData() {
    console.log("Data Saved!");
}

const debouncedSave = debounce(saveData, 2000);

// Simulating multiple rapid clicks
debouncedSave();
debouncedSave();
debouncedSave();
debouncedSave();