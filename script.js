const randomNumber = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) +min;
}

const randomRGB = () => [
    // entre 0 and 253
    randomNumber(0, 253),
    randomNumber(0, 253),
    randomNumber(0, 253)
];