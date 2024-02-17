function firstFunction(callback) {
    setTimeout(() => {
        console.log('First function executed');
        callback();
    }, 2000);
}

function secondFunction(callback) {
    setTimeout(() => {
        console.log('Second function executed');
        callback();
    }, 1000);
}

function thirdFunction(callback) {
    setTimeout(() => {
        console.log('Third function executed');
        callback();
    }, 500);
}

firstFunction(() => {
    secondFunction(() => {
        thirdFunction(() => {
            console.log('All functions executed');
        });
    });
});