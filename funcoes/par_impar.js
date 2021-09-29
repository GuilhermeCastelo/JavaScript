function parimpar(n) {
    if (n % 2 == 0) {
        return 'par';
    } else {
        return 'ímpar';
    }
}

let result = parimpar(30);

console.log("O número informado é " + result);