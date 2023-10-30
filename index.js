function dummy() {
    return "stuff";
}

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function named() { console.log("A named function was called.") };
}

function returnsAnAnonymousFunction() {
    return function () { console.log("An anonymous function was called.") };
}